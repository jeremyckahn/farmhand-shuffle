import { GameState } from '../../game/types'
import { GameRuleMachineContextSelectorDerivation } from '../../ui/hooks/useGameRules'

import { stubGame } from './game'

export const stubSelectorState = (
  overrides?: Partial<GameRuleMachineContextSelectorDerivation>
): GameRuleMachineContextSelectorDerivation => ({
  game: stubGame({ winner: null }),
  gameState: GameState.UNINITIALIZED,
  ...overrides,
})
