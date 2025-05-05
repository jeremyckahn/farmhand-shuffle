import { StateValue } from 'xstate'

import { GameMachineContext } from '../../game/services/Rules/state-machine/createMachine'
import { assertStringIsGameState } from '../../game/types/guards'
import { ActorContext } from '../components/Game/ActorContext'

export interface GameRuleMachineContextSelectorDerivation
  extends Pick<
    GameMachineContext,
    | 'eventCardsThatCanBePlayed'
    | 'game'
    | 'selectedWaterCardInHandIdx'
    | 'winner'
  > {
  gameState: StateValue
}

export const useGameRules = () => {
  const {
    eventCardsThatCanBePlayed,
    game,
    gameState,
    selectedWaterCardInHandIdx,
    winner,
  } = ActorContext.useSelector(
    ({
      context: {
        eventCardsThatCanBePlayed,
        game,
        selectedWaterCardInHandIdx,
        winner,
      },
      value,
    }): GameRuleMachineContextSelectorDerivation => ({
      eventCardsThatCanBePlayed,
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
    eventCardsThatCanBePlayed,
    game,
    gameState,
    selectedWaterCardInHandIdx,
    winner,
  }
}
