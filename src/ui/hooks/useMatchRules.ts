import { StateValue } from 'xstate'

import {
  BotTurnActionState,
  MatchMachineContext,
  MatchState,
} from '../../game/types'
import { isStateValueStateValueMap } from '../../game/types/guards'
import {
  assertIsNonNullable,
  assertStateValueIsBotTurnActionState,
  assertStringIsMatchState,
} from '../../game/types/assertions'
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
  let botTurnActionState: BotTurnActionState | null = null

  if (isStateValueStateValueMap(matchState)) {
    if (MatchState.PERFORMING_BOT_TURN_ACTION in matchState) {
      resolvedMatchState = MatchState.PERFORMING_BOT_TURN_ACTION

      const maybeBotTurnActionState =
        matchState[MatchState.PERFORMING_BOT_TURN_ACTION]

      assertIsNonNullable(maybeBotTurnActionState)
      assertStateValueIsBotTurnActionState(maybeBotTurnActionState)

      botTurnActionState = maybeBotTurnActionState
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
    botTurnActionState,
  }
}
