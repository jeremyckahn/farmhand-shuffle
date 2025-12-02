import { stubWater } from '../../../../test-utils/stubs/cards'
import { DECK_SIZE } from '../../../config'
import { updatePlayer } from '../../../reducers/update-player'
import { MatchEvent, MatchState } from '../../../types'
import { botLogic } from '../../BotLogic'
import { PlayerOutOfFundsError } from '../errors'

import { createSetUpMatchActor, player2 } from './helpers'

describe('bot turn action error handling', () => {
  test('handles PlayerOutOfFundsError during PLAYING_WATER state', () => {
    const startingHand = [stubWater]
    const startingDeck = new Array(DECK_SIZE).fill(stubWater)

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

    vi.spyOn(botLogic, 'getCropCardIndicesToWater').mockImplementation(() => {
      throw new PlayerOutOfFundsError(player2.id)
    })

    matchActor.send({ type: MatchEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const { value } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.GAME_OVER)
  })
})
