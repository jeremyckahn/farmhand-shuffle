import { randomNumber } from '../../../../../services/RandomNumber'
import { stubShovel, stubWater } from '../../../../../test-utils/stubs/cards'
import { DECK_SIZE } from '../../../../config'
import { updatePlayer } from '../../../../reducers/update-player'
import {
  CardInstance,
  MatchEvent,
  MatchState,
  IPlayer,
} from '../../../../types'
import { createSetUpMatchActor, player1, player2 } from '../helpers'

describe('shovel', () => {
  test('player draws two cards and prevents card draw on next turn', () => {
    const matchActor = createSetUpMatchActor()

    const {
      context: { match },
    } = matchActor.getSnapshot()

    const matchBeforePlayingShovel = updatePlayer(match, player1.id, {
      hand: [stubShovel],
    })

    matchActor.send({
      type: MatchEvent.DANGEROUSLY_SET_CONTEXT,
      match: matchBeforePlayingShovel,
    })

    // NOTE: Plays the tool card
    matchActor.send({
      type: MatchEvent.PLAY_TOOL,
      playerId: player1.id,
      cardIdx: 0,
    })

    {
      const {
        context: { match: matchResult },
      } = matchActor.getSnapshot()

      // NOTE: Asserts that cards were drawn
      expect(matchResult.table.players[player1.id].hand).toEqual(
        matchBeforePlayingShovel.table.players[player1.id].deck.slice(0, 2)
      )
      expect(matchResult.table.players[player1.id].deck).toEqual(
        matchBeforePlayingShovel.table.players[player1.id].deck.slice(2)
      )
    }

    // NOTE: Ends player turn and starts bot player turn
    matchActor.send({
      type: MatchEvent.START_TURN,
    })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    // NOTE: Asserts that no new cards were drawn
    expect(matchResult.table.players[player1.id].hand).toEqual(
      matchBeforePlayingShovel.table.players[player1.id].deck.slice(0, 2)
    )
    expect(matchResult.table.players[player1.id].deck).toEqual(
      matchBeforePlayingShovel.table.players[player1.id].deck.slice(2)
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

    const matchActor = createSetUpMatchActor()

    const snapshot = matchActor.getSnapshot()
    let {
      context: { match },
    } = snapshot

    match = updatePlayer(match, player2.id, {
      deck: startingDeck,
      hand: startingHand,
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Prompts bot player
    matchActor.send({ type: MatchEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      context: { match: matchAfterPlayingShovel },
    } = matchActor.getSnapshot()

    {
      const { value } = matchActor.getSnapshot()

      expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    }

    // NOTE: Prompts bot player
    matchActor.send({ type: MatchEvent.START_TURN })

    // NOTE: Bot logic is intentionally not run at this point so that pre-logic
    // (planting crops, playing events, etc.) state can be evaluated

    {
      const {
        context: { match: matchResult },
      } = matchActor.getSnapshot()

      // NOTE: Indicates that the card draw has been skipped
      expect(matchResult.table.players[player2.id].hand).toEqual<
        IPlayer['hand']
      >(matchAfterPlayingShovel.table.players[player2.id].hand)
      expect(matchResult.table.players[player2.id].discardPile).toEqual<
        IPlayer['discardPile']
      >(matchAfterPlayingShovel.table.players[player2.id].discardPile)

      // NOTE: Indicates that the bot's turn has started properly
      expect(
        matchResult.table.players[player2.id].cardsPlayedDuringTurn
      ).toEqual<IPlayer['discardPile']>([])
    }
  })
})
