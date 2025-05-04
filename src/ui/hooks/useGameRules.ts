import { StateValue } from 'xstate'

import { GameMachineContext } from '../../game/services/Rules/state-machine/createMachine'
import { assertStringIsGameState } from '../../game/types/guards'
import { ActorContext } from '../components/Game/ActorContext'

export interface GameRuleMachineContextSelectorDerivation
  extends Pick<
    GameMachineContext,
    | 'eventsCardsThatCanBePlayed'
    | 'game'
    | 'selectedWaterCardInHandIdx'
    | 'winner'
  > {
  gameState: StateValue
}

export const useGameRules = () => {
  const {
    eventsCardsThatCanBePlayed,
    game,
    gameState,
    selectedWaterCardInHandIdx,
    winner,
  } = ActorContext.useSelector(
    ({
      context: {
        eventsCardsThatCanBePlayed,
        game,
        selectedWaterCardInHandIdx,
        winner,
      },
      value,
    }): GameRuleMachineContextSelectorDerivation => ({
      eventsCardsThatCanBePlayed,
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

  return {
    eventsCardsThatCanBePlayed,
    game,
    gameState,
    selectedWaterCardInHandIdx,
    winner,
  }
}
