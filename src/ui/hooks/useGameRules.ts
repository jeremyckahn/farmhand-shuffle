import { StateValue } from 'xstate'

import { GameMachineContext } from '../../game/services/Rules/state-machine/createMachine'
import { assertStringIsGameState } from '../../game/types/guards'
import { ActorContext } from '../components/Game/ActorContext'

export interface GameRuleMachineContextSelectorDerivation
  extends Pick<
    GameMachineContext,
    'game' | 'selectedWaterCardInHandIdx' | 'winner'
  > {
  gameState: StateValue
}

export const useGameRules = () => {
  const { game, gameState, selectedWaterCardInHandIdx, winner } =
    ActorContext.useSelector(
      ({
        context: { game, selectedWaterCardInHandIdx, winner },
        value,
      }): GameRuleMachineContextSelectorDerivation => ({
        game,
        gameState: value,
        selectedWaterCardInHandIdx,
        winner,
      })
    )

  if (typeof gameState !== 'string') {
    throw new TypeError(`Actor state is not a string`)
  }

  assertStringIsGameState(gameState)

  return { game, gameState, selectedWaterCardInHandIdx, winner }
}
