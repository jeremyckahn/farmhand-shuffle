import { MatchEvent, MatchState } from '../../../types'
import { stubPlayer1 } from '../../../../test-utils/stubs/players'
import { updatePlayer } from '../../../reducers/update-player'

import { createSetUpMatchActor, player1, playerSeeds } from './helpers'

describe('game over state', () => {
  test('match can be restarted', () => {
    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      funds: 1,
    })
    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Prompts bot player
    matchActor.send({ type: MatchEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    matchActor.send({
      type: MatchEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_SETUP_ACTION)
    expect(matchResult.currentPlayerId).toEqual(stubPlayer1.id)
  })
})
