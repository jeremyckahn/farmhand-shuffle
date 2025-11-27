import { StateValue } from 'xstate'

import { GameMachineContext } from '../../game/services/Rules/state-machine/createMachine'
import { GameState } from '../../game/types'
import { assertStringIsGameState } from '../../game/types/guards'
import { ActorContext } from '../components/Game/ActorContext'

export interface GameRuleMachineContextSelectorDerivation
  extends Pick<GameMachineContext, 'game'> {
  gameState: StateValue
  winner: GameMachineContext['game']['winner']
}

export const useGameRules = () => {
  const { game, gameState, winner } = ActorContext.useSelector(
    ({
      context: { game },
      value,
    }): GameRuleMachineContextSelectorDerivation => ({
      game,
      gameState: value,
      winner: game.winner,
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
    game,
    gameState: resolvedGameState,
    winner,
  }
}
