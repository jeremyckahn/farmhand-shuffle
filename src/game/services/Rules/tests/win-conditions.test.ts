import { MatchEvent, MatchState } from '../../../types'
import { stubPlayer1, stubPlayer2 } from '../../../../test-utils/stubs/players'
import { updatePlayer } from '../../../reducers/update-player'

import { createSetUpMatchActor, player1, player2 } from './helpers'

describe('win conditions', () => {
  test('the player running out of money causes the bot to win', () => {
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

    const {
      value,
      context: {
        match: { winner },
      },
    } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.GAME_OVER)
    expect(winner).toEqual(stubPlayer2.id)
  })

  test('the bot running out of money causes the player to win', () => {
    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player2.id, {
      funds: 1,
    })
    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Prompts bot player
    matchActor.send({ type: MatchEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      value,
      context: {
        match: { winner },
      },
    } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.GAME_OVER)
    expect(winner).toEqual(stubPlayer1.id)
  })
})
