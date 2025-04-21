import { randomNumber } from '../../../services/RandomNumber'
import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin, water } from '../../cards'
import { DECK_SIZE, STANDARD_FIELD_SIZE } from '../../config'
import * as startTurnModule from '../../reducers/start-turn'
import { updateField } from '../../reducers/update-field'
import { updatePlayer } from '../../reducers/update-player'
import {
  CardInstance,
  CropInstance,
  GameEvent,
  GameState,
  ICard,
  IField,
  IPlayedCrop,
  IPlayer,
} from '../../types'
import { factory } from '../Factory'

import { rules } from '.'

const player1 = stubPlayer1
const player2 = stubPlayer2

const playerSeeds = [player1, player2]

vi.mock('lodash.shuffle')

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

const expectInstance = ({ id }: ICard): CropInstance => {
  return expect.objectContaining<Partial<CropInstance>>({
    id,
  }) as unknown as CropInstance
}

const carrot1 = instantiate(carrot)
const carrot2 = instantiate(carrot)
const pumpkin1 = instantiate(pumpkin)

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
    hand: [instantiate(carrot)],
  })
  game = updatePlayer(game, player2.id, {
    hand: [instantiate(carrot)],
  })

  gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

  gameActor.send({
    type: GameEvent.PLAY_CROP,
    playerId: player1.id,
    cardIdx: 0,
  })

  gameActor.send({
    // NOTE: Prompts bot player
    type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
  })

  // NOTE: Performs all bot setup logic
  vi.runAllTimers()

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
        hand: [carrot1, carrot2],
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
        { instance: carrot1, wasWateredTuringTurn: false, waterCards: 0 },
        { instance: carrot2, wasWateredTuringTurn: false, waterCards: 0 },
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
        hand: [carrot1],
      })
      game = updatePlayer(game, player2.id, {
        hand: [carrot2],
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
      >([{ instance: carrot2, wasWateredTuringTurn: false, waterCards: 0 }])
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
        hand: [carrot1],
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
        hand: [pumpkin1],
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
        {
          instance: expectInstance(carrot),
          wasWateredTuringTurn: false,
          waterCards: 0,
        },
        { instance: pumpkin1, wasWateredTuringTurn: false, waterCards: 0 },
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
          factory.buildPlayedCrop(instantiate(carrot))
        ),
      }

      game = updatePlayer(game, player1.id, {
        hand: [instantiate(carrot)],
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
        hand: [instantiate(water)],
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
          instance: expectInstance(carrot),
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
        hand: [instantiate(water)],
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
        hand: [instantiate(water)],
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
    test.each<{
      startingHand: IPlayer['hand']
      startingDeck: IPlayer['deck']
      resultingFieldCrops: IField['crops']
      resultingHand: IPlayer['hand']
      resultingDeck: IPlayer['deck']
    }>([
      {
        startingHand: [],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
      },

      {
        startingHand: [],
        startingDeck: [
          carrot1,
          ...new Array<CardInstance>(DECK_SIZE - 2).fill(stubWater),
        ],
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: false,
            waterCards: 0,
          },
          {
            instance: carrot1,
            wasWateredTuringTurn: false,
            waterCards: 0,
          },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 2).fill(stubWater),
      },

      {
        startingHand: [stubWater],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
        ],
        // NOTE: The water card from startingHand was played (as seen in
        // resultingFieldCrops). This is the water card pulled from the deck.
        resultingHand: [stubWater],

        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
      },

      {
        startingHand: [pumpkin1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
          { instance: pumpkin1, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
      },

      {
        startingHand: [pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredTuringTurn: false, waterCards: 0 },
          { instance: pumpkin1, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
      },

      {
        startingHand: [stubWater, pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredTuringTurn: true, waterCards: 1 },
          { instance: pumpkin1, wasWateredTuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
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

        // NOTE: Prompts bot player
        gameActor.send({ type: GameEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { game: gameResult, cropsToPlayDuringBotTurn },
        } = gameActor.getSnapshot()

        expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(gameResult.currentPlayerId).toBe(player1.id)
        expect(gameResult.table.players[player2.id].field.crops).toEqual<
          IField['crops']
        >(resultingFieldCrops)
        expect(gameResult.table.players[player2.id].hand).toEqual(resultingHand)
        expect(gameResult.table.players[player2.id].deck).toEqual(resultingDeck)
        expect(cropsToPlayDuringBotTurn).toEqual(0)
      }
    )

    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpGameActor.
    test.each<{
      startingFieldCrops: IField['crops']
      startingDiscardPile: CardInstance[]
      resultingFieldCrops: IField['crops']
      resultingDiscardPile: CardInstance[]
    }>([
      {
        startingDiscardPile: [],
        startingFieldCrops: [],
        resultingFieldCrops: [],
        resultingDiscardPile: [],
      },

      {
        startingDiscardPile: [],
        startingFieldCrops: [
          {
            instance: stubCarrot,
            wasWateredTuringTurn: true,
            waterCards: carrot.waterToMature,
          },
        ],
        resultingFieldCrops: [undefined],
        resultingDiscardPile: [stubCarrot],
      },

      {
        startingDiscardPile: [],
        startingFieldCrops: [
          {
            instance: stubPumpkin,
            wasWateredTuringTurn: true,
            waterCards: pumpkin.waterToMature,
          },
          {
            instance: stubCarrot,
            wasWateredTuringTurn: true,
            waterCards: 0,
          },
        ],
        resultingFieldCrops: [
          undefined,
          // NOTE: This is the previously unwatered, unharvestable crop
          {
            instance: stubCarrot,
            wasWateredTuringTurn: true,
            waterCards: 1,
          },
        ],
        resultingDiscardPile: [stubPumpkin],
      },
    ])(
      'harvests crops from starting field $startingFieldCrops',
      ({ startingFieldCrops, resultingFieldCrops }) => {
        const gameActor = createSetUpGameActor()

        let {
          context: { game },
        } = gameActor.getSnapshot()

        game = updateField(game, player2.id, {
          crops: startingFieldCrops,
        })

        gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

        // NOTE: Prompts bot player
        gameActor.send({ type: GameEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { game: gameResult },
        } = gameActor.getSnapshot()

        expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(gameResult.currentPlayerId).toBe(player1.id)
        expect(gameResult.table.players[player2.id].field.crops).toEqual<
          IField['crops']
        >(resultingFieldCrops)
      }
    )
  })

  describe('win conditions', () => {
    test('the player running out of money causes the bot to win', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        funds: 1,
      })
      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      // NOTE: Prompts bot player
      gameActor.send({ type: GameEvent.START_TURN })

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      const {
        value,
        context: { winner },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.GAME_OVER)
      expect(winner).toEqual(stubPlayer2.id)
    })

    test('the bot running out of money causes the player to win', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player2.id, {
        funds: 1,
      })
      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      // NOTE: Prompts bot player
      gameActor.send({ type: GameEvent.START_TURN })

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      const {
        value,
        context: { winner },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.GAME_OVER)
      expect(winner).toEqual(stubPlayer1.id)
    })
  })

  describe('game over state', () => {
    test('game can be restarted', () => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updatePlayer(game, player1.id, {
        funds: 1,
      })
      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      // NOTE: Prompts bot player
      gameActor.send({ type: GameEvent.START_TURN })

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      gameActor.send({
        type: GameEvent.INIT,
        playerSeeds,
        userPlayerId: player1.id,
      })

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_SETUP_ACTION)
      expect(gameResult.currentPlayerId).toEqual(stubPlayer1.id)
    })
  })
})
