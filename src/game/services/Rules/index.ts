import { createActor } from 'xstate'

import { isToolCardInstance, MatchMachineContext } from '../../types'
import { assertIsNonNullable } from '../../types/guards'

import { createMatchStateMachineContext } from './createMatchStateMachineContext'
import { machineConfig } from './state-machine'
import { createMachine } from './state-machine/createMachine'

export class RulesService {
  createMatchStateMachine = () => {
    const machine = createMachine({
      context: createMatchStateMachineContext(),
      ...machineConfig,
    })

    return machine
  }

  startMatch = () => {
    return createActor(this.createMatchStateMachine()).start()
  }

  // FIXME: Test this
  applyDailyEffects = (context: MatchMachineContext): MatchMachineContext => {
    let { match } = context
    const { currentPlayerId } = match

    assertIsNonNullable(currentPlayerId)

    const currentPlayer = match.table.players[currentPlayerId]

    assertIsNonNullable(currentPlayer)

    for (let i = 0; i < currentPlayer.field.cards.length; i++) {
      const card = currentPlayer.field.cards[i]

      if (
        card &&
        isToolCardInstance(card.instance) &&
        card.instance.applyDailyEffect
      ) {
        context = card.instance.applyDailyEffect({ ...context, match }, i)
        match = context.match
      }
    }

    return context
  }
}

export const rules = new RulesService()
