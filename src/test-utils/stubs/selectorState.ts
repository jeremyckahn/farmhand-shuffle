import { GameState } from '../../game/types'
import { GameRuleMachineContextSelectorDerivation } from '../../ui/hooks/useGameRules'

import { stubGame } from './game'

export const stubSelectorState = (
  overrides?: Partial<GameRuleMachineContextSelectorDerivation>
): GameRuleMachineContextSelectorDerivation => ({
  eventCardsThatCanBePlayed: 1,
  game: stubGame(),
  gameState: GameState.UNINITIALIZED,
  selectedWaterCardInHandIdx: 0,
  winner: null,
  ...overrides,
})
