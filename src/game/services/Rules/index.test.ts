import { randomNumber } from '../../../services/RandomNumber'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { carrot, pumpkin, water } from '../../cards'
import { DECK_SIZE, STANDARD_FIELD_SIZE } from '../../config'
import * as startTurnModule from '../../reducers/start-turn'
import { updatePlayer } from '../../reducers/update-player'
import { GameEvent, GameState, IPlayedCrop } from '../../types'
import { factory } from '../Factory'

import { rules } from '.'

const player1 = stubPlayer1
const player2 = stubPlayer2

const playerSeeds = [player1, player2]

vi.mock('lodash.shuffle')

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

/**
 * Initializes a game actor and sets up each player with a played crop.
 */
const createSetUpGameActor = () => {
  const gameActor = rules.startGame()

  gameActor.send({
    type: GameEvent.INIT,
    playerSeeds,
    userPlayerId: player1.id,
  })

  let {
    context: { game },
  } = gameActor.getSnapshot()

  game = updatePlayer(game, player1.id, {
    hand: [carrot.id],
  })
  game = updatePlayer(game, player2.id, {
    hand: [carrot.id],
  })

  gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

  gameActor.send({
    type: GameEvent.PLAY_CROP,
    playerId: player1.id,
    cardIdx: 0,
  })
  gameActor.send({
    // NOTE: Prompts player 2
    type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
  })
  gameActor.send({
    type: GameEvent.PLAY_CROP,
    playerId: player2.id,
    cardIdx: 0,
  })
  gameActor.send({
    // NOTE: Prompts player 1 again
    type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION,
  })

  return gameActor
}

beforeEach(() => {
  vi.spyOn(randomNumber, 'generate').mockReturnValue(0)
})

describe('createGameStateMachine', () => {
  describe('game setup', () => {
    it('initializes game', () => {
      const gameActor = rules.startGame()

      const { value } = gameActor.getSnapshot()

      expect(value).toBe(GameState.UNINITIALIZED)
    })

    it('lets the player set up crops', () => {
      const gameActor = rules.startGame()

      gameActor.send({
        type: GameEvent.INIT,
        playerSeeds,
        userPlayerId: player1.id,
      })

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [carrot.id, carrot.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
      // NOTE: Plays first carrot card
      gameActor.send({
        type: GameEvent.PLAY_CROP,
        playerId: player1.id,
        cardIdx: 0,
      })
      // NOTE: Plays second carrot card
      gameActor.send({
        type: GameEvent.PLAY_CROP,
        playerId: player1.id,
        cardIdx: 0,
      })

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_SETUP_ACTION)
      expect(gameResult.table.players[player1.id].hand).toEqual([])
      expect(gameResult.table.players[player1.id].field.crops).toEqual<
        IPlayedCrop[]
      >([
        { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
        { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
      ])
    })

    it('completes the setup sequence', () => {
      const gameActor = rules.startGame()

      gameActor.send({
        type: GameEvent.INIT,
        playerSeeds,
        userPlayerId: player1.id,
      })

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [carrot.id],
      })
      game = updatePlayer(game, player2.id, {
        hand: [carrot.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
      gameActor.send({
        type: GameEvent.PLAY_CROP,
        playerId: player1.id,
        cardIdx: 0,
      })
      // NOTE: Prompts player 2
      gameActor.send({
        type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
      })

      vi.runAllTimers()

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      // NOTE: Indicates that the bot has completed setup and has given control back to the player
      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)

      expect(gameResult.currentPlayerId).toEqual(player1.id)
      expect(gameResult.table.players[player2.id].field.crops).toEqual<
        IPlayedCrop[]
      >([{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }])
    })

    it('does not let game start until all players have set up', () => {
      const gameActor = rules.startGame()

      gameActor.send({
        type: GameEvent.INIT,
        playerSeeds,
        userPlayerId: player1.id,
      })

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [carrot.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
      gameActor.send({
        type: GameEvent.PLAY_CROP,
        playerId: player1.id,
        cardIdx: 0,
      })

      const previousSnapshot = gameActor.getSnapshot()

      gameActor.send({
        type: GameEvent.START_TURN,
      })

      const latestSnapshot = gameActor.getSnapshot()

      // NOTE: Indicates that the state change was prevented by a guard
      expect(previousSnapshot).toEqual(latestSnapshot)
    })
  })

  describe('player turn action handling', () => {
    it('player can play a crop card', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [pumpkin.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
      gameActor.send({
        type: GameEvent.PLAY_CARD,
        playerId: player1.id,
        cardIdx: 0,
      })

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(gameResult.table.players[player1.id].hand).toEqual([])
      expect(gameResult.table.players[player1.id].field.crops).toEqual<
        IPlayedCrop[]
      >([
        { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
        { id: pumpkin.id, wasWateredTuringTurn: false, waterCards: 0 },
      ])
    })

    it('player cannot play crop card if field is full', () => {
      vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      const filledField = {
        crops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill(
          factory.buildPlayedCrop(carrot)
        ),
      }

      game = updatePlayer(game, player1.id, {
        hand: [carrot.id],
        field: filledField,
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      const previousSnapshot = gameActor.getSnapshot()

      gameActor.send({
        type: GameEvent.PLAY_CARD,
        playerId: player1.id,
        cardIdx: 0,
      })

      const latestSnapshot = gameActor.getSnapshot()

      expect(latestSnapshot).toEqual(previousSnapshot)
    })

    it('player can play a water card', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [water.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
      // NOTE: Plays the water card
      gameActor.send({
        type: GameEvent.PLAY_CARD,
        playerId: player1.id,
        cardIdx: 0,
      })
      gameActor.send({
        type: GameEvent.SELECT_CROP_TO_WATER,
        playerId: player1.id,
        cropIdxInFieldToWater: 0,
        waterCardInHandIdx: 0,
      })

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(gameResult.table.players[player1.id].hand).toEqual([])
      expect(gameResult.table.players[player1.id].field.crops).toEqual<
        IPlayedCrop[]
      >([
        {
          id: carrot.id,
          wasWateredTuringTurn: true,
          waterCards: 1,
        },
      ])
    })

    it('player can abort playing a water card', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [water.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      const previousSnapshot = gameActor.getSnapshot()

      // NOTE: Plays the water card
      gameActor.send({
        type: GameEvent.PLAY_CARD,
        playerId: player1.id,
        cardIdx: 0,
      })

      gameActor.send({
        type: GameEvent.OPERATION_ABORTED,
      })

      const latestSnapshot = gameActor.getSnapshot()

      expect(latestSnapshot).toEqual(previousSnapshot)
    })

    it('handles failure when watering a crop', () => {
      vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        hand: [water.id],
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      const previousSnapshot = gameActor.getSnapshot()

      // NOTE: Plays the water card
      gameActor.send({
        type: GameEvent.PLAY_CARD,
        playerId: player1.id,
        cardIdx: 0,
      })

      gameActor.send({
        type: GameEvent.SELECT_CROP_TO_WATER,
        playerId: player1.id,
        cropIdxInFieldToWater: -1, // An intentionally invalid index
        waterCardInHandIdx: 0,
      })

      const latestSnapshot = gameActor.getSnapshot()

      expect(latestSnapshot).toEqual(previousSnapshot)
    })

    it('player can end their turn', () => {
      const gameActor = createSetUpGameActor()

      const startPlayerTurn = vi.spyOn(startTurnModule, 'startTurn')
      gameActor.send({ type: GameEvent.START_TURN })

      vi.runAllTimers()

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)

      // NOTE: Indicates that bot logic has been executed
      expect(startPlayerTurn.mock.calls[0][1]).toEqual(player2.id)

      // NOTE: Indicates that control has been returned back to the player
      expect(gameResult.currentPlayerId).toEqual(player1.id)
    })
  })

  describe('bot turn action handling', () => {
    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpGameActor.
    test.each([
      {
        startingHand: [],
        startingDeck: new Array(DECK_SIZE).fill(water.id),
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
        ],
        resultingHand: [],
        resultingDeck: new Array(DECK_SIZE - 1).fill(water.id),
      },

      {
        startingHand: [],
        startingDeck: [
          carrot.id,
          ...new Array<string>(DECK_SIZE - 2).fill(water.id),
        ],
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
          { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array(DECK_SIZE - 2).fill(water.id),
      },

      {
        startingHand: [water.id],
        startingDeck: new Array(DECK_SIZE).fill(water.id),
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
        ],
        // NOTE: The water card from startingHand was played (as seen in
        // resultingFieldCrops). This is the water card pulled from the deck.
        resultingHand: [water.id],

        resultingDeck: new Array(DECK_SIZE - 1).fill(water.id),
      },

      {
        startingHand: [pumpkin.id],
        startingDeck: new Array(DECK_SIZE).fill(water.id),
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
          { id: pumpkin.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array(DECK_SIZE - 1).fill(water.id),
      },

      {
        startingHand: [pumpkin.id, carrot.id],
        startingDeck: new Array(DECK_SIZE).fill(water.id),
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
          { id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 },
          { id: pumpkin.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array(DECK_SIZE - 1).fill(water.id),
      },

      {
        startingHand: [water.id, pumpkin.id, carrot.id],
        startingDeck: new Array(DECK_SIZE).fill(water.id),
        resultingFieldCrops: [
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
          { id: carrot.id, wasWateredTuringTurn: true, waterCards: 1 },
          { id: pumpkin.id, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array(DECK_SIZE - 1).fill(water.id),
      },
    ])(
      'plants and waters crops from starting hand $startingHand',
      ({
        startingHand,
        startingDeck,
        resultingFieldCrops,
        resultingHand,
        resultingDeck,
      }) => {
        const gameActor = createSetUpGameActor()

        let {
          context: { game },
        } = gameActor.getSnapshot()

        // NOTE: This causes the maximum amount of crops in the hand to be
        // played, but it plays from from the back of the hand to the front.
        vi.spyOn(randomNumber, 'generate').mockReturnValue(1)

        game = updatePlayer(game, player2.id, {
          deck: startingDeck,
          hand: startingHand,
        })
        gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

        gameActor.send({ type: GameEvent.START_TURN })
        vi.runAllTimers()

        const {
          value,
          context: { game: gameResult, cropsToPlayDuringBotTurn },
        } = gameActor.getSnapshot()

        expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(gameResult.currentPlayerId).toBe(player1.id)
        expect(gameResult.table.players[player2.id].field.crops).toEqual<
          IPlayedCrop[]
        >(resultingFieldCrops)
        expect(gameResult.table.players[player2.id].hand).toEqual(resultingHand)
        expect(gameResult.table.players[player2.id].deck).toEqual(resultingDeck)
        expect(cropsToPlayDuringBotTurn).toEqual(0)
      }
    )
  })
})
