import { MatchEvent, MatchState } from '../../../types'
import { updatePlayer } from '../../../reducers/update-player'
import { rules } from '..'
import { createMatchStateMachineContext } from '../createMatchStateMachineContext'

import { createSetUpMatchActor, player1, player2 } from './helpers'

describe('MatchEvent.RESUME', () => {
  test('resumes into WAITING_FOR_PLAYER_SETUP_ACTION with the given match and botState', () => {
    const sourceActor = createSetUpMatchActor()

    const {
      context: { match, botState },
    } = sourceActor.getSnapshot()

    const resumedActor = rules.startMatch()

    resumedActor.send({
      type: MatchEvent.RESUME,
      matchState: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
      match,
      botState,
      userPlayerId: player1.id,
    })

    const snapshot = resumedActor.getSnapshot()

    expect(snapshot.value).toBe(MatchState.WAITING_FOR_PLAYER_SETUP_ACTION)
    expect(snapshot.context.match).toEqual(match)
    expect(snapshot.context.botState).toEqual(botState)
  })

  test('resumes into WAITING_FOR_PLAYER_TURN_ACTION with the given match and botState', () => {
    const sourceActor = createSetUpMatchActor()

    // NOTE: Prompts the bot player, then advances turn logic to get to a
    // real WAITING_FOR_PLAYER_TURN_ACTION checkpoint.
    sourceActor.send({ type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION })
    vi.runAllTimers()

    let {
      context: { match },
    } = sourceActor.getSnapshot()

    match = updatePlayer(match, player2.id, {
      hand: [],
    })

    sourceActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    const {
      context: { match: setUpMatch, botState },
      value,
    } = sourceActor.getSnapshot()

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    const resumedActor = rules.startMatch()

    resumedActor.send({
      type: MatchEvent.RESUME,
      matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      match: setUpMatch,
      botState,
      userPlayerId: player1.id,
    })

    const snapshot = resumedActor.getSnapshot()

    expect(snapshot.value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(snapshot.context.match).toEqual(setUpMatch)
    expect(snapshot.context.botState).toEqual(botState)
  })

  test('sets sessionOwnerPlayerId to the given userPlayerId', () => {
    const { match: freshMatch, botState } = createMatchStateMachineContext()

    const match = { ...freshMatch, sessionOwnerPlayerId: player2.id }

    const resumedActor = rules.startMatch()

    resumedActor.send({
      type: MatchEvent.RESUME,
      matchState: MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
      match,
      botState,
      userPlayerId: player1.id,
    })

    const snapshot = resumedActor.getSnapshot()

    expect(snapshot.context.match.sessionOwnerPlayerId).toBe(player1.id)
  })
})
