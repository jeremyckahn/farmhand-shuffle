import { StateValue } from 'xstate'

import { MatchMachineContext, MatchState } from '../../game/types'
import { assertStringIsMatchState } from '../../game/types/guards'
import { ActorContext } from '../components/Match/ActorContext'

export interface MatchRuleMachineContextSelectorDerivation
  extends Pick<MatchMachineContext, 'match'> {
  matchState: StateValue
}

export const useMatchRules = () => {
  const { match, matchState } = ActorContext.useSelector(
    ({
      context: { match },
      value,
    }): MatchRuleMachineContextSelectorDerivation => ({
      match,
      matchState: value,
    })
  )

  let resolvedMatchState = matchState

  if (typeof matchState === 'object') {
    if (MatchState.PERFORMING_BOT_TURN_ACTION in matchState) {
      resolvedMatchState = MatchState.PERFORMING_BOT_TURN_ACTION
    } else {
      throw new TypeError(`Unexpected matchState shape`)
    }
  }

  if (typeof resolvedMatchState !== 'string') {
    throw new TypeError(`Actor state is not a string`)
  }

  assertStringIsMatchState(resolvedMatchState)

  return {
    match,
    matchState: resolvedMatchState,
  }
}
