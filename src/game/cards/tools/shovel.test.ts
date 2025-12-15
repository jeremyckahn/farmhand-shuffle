import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubContext } from '../../../test-utils/stubs/context'
import { stubMatch } from '../../../test-utils/stubs/match'
import { updatePlayer } from '../../reducers/update-player'
import { createMatchStateMachineContext } from '../../services/Rules/createMatchStateMachineContext'
import { ShellNotificationType } from '../../types'
import { assertCurrentPlayer } from '../../types/guards'

import { shovel } from './shovel'

describe('shovel', () => {
  describe('applyEffect', () => {
    test('draws two cards', () => {
      let match = stubMatch()
      const { currentPlayerId } = match
      assertCurrentPlayer(currentPlayerId)

      match = updatePlayer(match, currentPlayerId, {
        deck: [stubCarrot, stubPumpkin, stubWater],
        hand: [],
      })

      const context = createMatchStateMachineContext()
      vi.spyOn(context.shell, 'triggerNotification')

      const { match: updatedMatch } = shovel.applyEffect({
        ...context,
        match,
      })

      const updatedPlayer = updatedMatch.table.players[currentPlayerId]

      if (!updatedPlayer) {
        throw new Error('Player not found')
      }

      expect(updatedPlayer.deck).toEqual([stubWater])
      expect(updatedPlayer.hand).toEqual([stubCarrot, stubPumpkin])

      expect(context.shell.triggerNotification).toHaveBeenCalledWith({
        type: ShellNotificationType.CARDS_DRAWN,
        payload: {
          howMany: 2,
          playerId: currentPlayerId,
        },
      })
    })
  })

  describe('onStartFollowingTurn', () => {
    test('sets match.cardsToDrawAtTurnStart to 0', () => {
      let match = stubMatch()
      const { currentPlayerId } = match
      assertCurrentPlayer(currentPlayerId)

      match = updatePlayer(match, currentPlayerId, {
        deck: [stubCarrot, stubPumpkin, stubWater],
        hand: [],
      })

      const { match: newMatch } = shovel.onStartFollowingTurn!({
        ...stubContext,
        match,
      })

      expect(newMatch.cardsToDrawAtTurnStart).toBe(0)
    })
  })
})
