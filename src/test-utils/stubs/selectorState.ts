import { MatchState } from '../../game/types'
import { MatchRuleMachineContextSelectorDerivation } from '../../ui/hooks/useMatchRules'

import { stubMatch } from './match'

export const stubSelectorState = (
  overrides?: Partial<MatchRuleMachineContextSelectorDerivation>
): MatchRuleMachineContextSelectorDerivation => ({
  match: stubMatch(),
  matchState: MatchState.UNINITIALIZED,
  ...overrides,
})
