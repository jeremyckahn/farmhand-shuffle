import { rules } from '../services/Rules'
import { MatchEvent, MatchState } from '../types'

import { buildLowFundsMatch, idleBotState } from './matchFixtures'

const sessionOwnerPlayerId = 'session-owner'
const opponentPlayerId = 'opponent'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

/**
 * Exercises buildLowFundsMatch fixtures through the exact same
 * RESUME -> START_TURN path a real resumed match (and this repo's own
 * public consumers, e.g. Farmhand's E2E fixtures) uses - see this
 * directory's README for the full mechanic this validates.
 */
const resumeAndEndTurn = (losingPlayerId: string) => {
  const { match, botState } = buildLowFundsMatch({
    sessionOwnerPlayerId,
    opponentPlayerId,
    losingPlayerId,
  })

  const matchActor = rules.startMatch()

  matchActor.send({
    type: MatchEvent.RESUME,
    matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
    match,
    botState,
    userPlayerId: sessionOwnerPlayerId,
  })

  expect(matchActor.getSnapshot().value).toBe(
    MatchState.WAITING_FOR_PLAYER_TURN_ACTION
  )

  // NOTE: The same event Match's own "End turn" button sends.
  matchActor.send({ type: MatchEvent.START_TURN })

  // NOTE: Resolves the opponent's entire turn, if their tax charge alone
  // doesn't already end the match.
  vi.runAllTimers()

  return matchActor.getSnapshot()
}

describe('buildLowFundsMatch', () => {
  test('the opponent running out of funds ends the match immediately, with the session owner winning', () => {
    const { value, context } = resumeAndEndTurn(opponentPlayerId)

    expect(value).toBe(MatchState.GAME_OVER)
    expect(context.match.winner).toEqual(sessionOwnerPlayerId)
  })

  test('the session owner running out of funds ends the match after the opponent`s turn resolves, with the opponent winning', () => {
    const { value, context } = resumeAndEndTurn(sessionOwnerPlayerId)

    expect(value).toBe(MatchState.GAME_OVER)
    expect(context.match.winner).toEqual(opponentPlayerId)
  })

  test('throws for a losingPlayerId that is neither player', () => {
    expect(() =>
      buildLowFundsMatch({
        sessionOwnerPlayerId,
        opponentPlayerId,
        losingPlayerId: 'someone-else',
      })
    ).toThrow()
  })

  test('idleBotState has no in-progress bot turn state', () => {
    expect(idleBotState).toEqual({
      cropCardIndicesToHarvest: [],
      cropsToPlayDuringTurn: 0,
      fieldCropIndicesToWaterDuringTurn: [],
      toolCardsThatCanBePlayed: 0,
    })
  })
})
