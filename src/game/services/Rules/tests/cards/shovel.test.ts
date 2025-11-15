import { randomNumber } from '../../../../../services/RandomNumber'
import { stubShovel, stubWater } from '../../../../../test-utils/stubs/cards'
import { DECK_SIZE } from '../../../../config'
import { updatePlayer } from '../../../../reducers/update-player'
import { CardInstance, GameEvent, GameState, IPlayer } from '../../../../types'
import { createSetUpGameActor, player1, player2 } from '../helpers'

describe('shovel', () => {
  test('player draws two cards and prevents card draw on next turn', () => {
    const gameActor = createSetUpGameActor()

    const {
      context: { game },
    } = gameActor.getSnapshot()

    const gameBeforePlayingShovel = updatePlayer(game, player1.id, {
      hand: [stubShovel],
    })

    gameActor.send({
      type: GameEvent.DANGEROUSLY_SET_CONTEXT,
      game: gameBeforePlayingShovel,
    })

    // NOTE: Plays the tool card
    gameActor.send({
      type: GameEvent.PLAY_TOOL,
      playerId: player1.id,
      cardIdx: 0,
    })

    {
      const {
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      // NOTE: Asserts that cards were drawn
      expect(gameResult.table.players[player1.id].hand).toEqual(
        gameBeforePlayingShovel.table.players[player1.id].deck.slice(0, 2)
      )
      expect(gameResult.table.players[player1.id].deck).toEqual(
        gameBeforePlayingShovel.table.players[player1.id].deck.slice(2)
      )
    }

    // NOTE: Ends player turn and starts bot player turn
    gameActor.send({
      type: GameEvent.START_TURN,
    })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)

    // NOTE: Asserts that no new cards were drawn
    expect(gameResult.table.players[player1.id].hand).toEqual(
      gameBeforePlayingShovel.table.players[player1.id].deck.slice(0, 2)
    )
    expect(gameResult.table.players[player1.id].deck).toEqual(
      gameBeforePlayingShovel.table.players[player1.id].deck.slice(2)
    )
  })

  test('bot draws two cards and prevents card draw on next turn', () => {
    const startingDeck: IPlayer['deck'] = new Array<CardInstance>(
      DECK_SIZE
    ).fill(stubWater)
    const startingHand: IPlayer['hand'] = [stubShovel]

    // NOTE: This causes the maximum amount of tools in the hand to be
    // played.
    vi.spyOn(randomNumber, 'generate').mockReturnValue(1)

    const gameActor = createSetUpGameActor()

    const snapshot = gameActor.getSnapshot()
    let {
      context: { game },
    } = snapshot

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
      context: { game: gameAfterPlayingShovel },
    } = gameActor.getSnapshot()

    {
      const { value } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
    }

    // NOTE: Prompts bot player
    gameActor.send({ type: GameEvent.START_TURN })

    // NOTE: Bot logic is intentionally not run at this point so that pre-logic
    // (planting crops, playing events, etc.) state can be evaluated

    {
      const {
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      // NOTE: Indicates that the card draw has been skipped
      expect(gameResult.table.players[player2.id].hand).toEqual<
        IPlayer['hand']
      >(gameAfterPlayingShovel.table.players[player2.id].hand)
      expect(gameResult.table.players[player2.id].discardPile).toEqual<
        IPlayer['discardPile']
      >(gameAfterPlayingShovel.table.players[player2.id].discardPile)

      // NOTE: Indicates that the bot's turn has started properly
      expect(
        gameResult.table.players[player2.id].cardsPlayedDuringTurn
      ).toEqual<IPlayer['discardPile']>([])
    }
  })
})
