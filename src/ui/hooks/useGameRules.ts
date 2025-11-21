import { StateValue } from 'xstate'

import { GameMachineContext } from '../../game/services/Rules/state-machine/createMachine'
import { GameState } from '../../game/types'
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

  let resolvedGameState = gameState

  if (typeof gameState === 'object') {
    if (GameState.PERFORMING_BOT_TURN_ACTION in gameState) {
      resolvedGameState = GameState.PERFORMING_BOT_TURN_ACTION
    } else {
      throw new TypeError(`Unexpected gameState shape`)
    }
  }

  if (typeof resolvedGameState !== 'string') {
    throw new TypeError(`Actor state is not a string`)
  }

  assertStringIsGameState(resolvedGameState)

  return {
    eventCardsThatCanBePlayed,
    game,
    gameState: resolvedGameState,
    selectedWaterCardInHandIdx,
    winner,
  }
}
