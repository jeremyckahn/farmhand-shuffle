import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubContext } from '../../../test-utils/stubs/context'
import { stubGame } from '../../../test-utils/stubs/game'
import { updatePlayer } from '../../reducers/update-player'
import { createGameStateMachineContext } from '../../services/Rules/createGameStateMachineContext'
import { ShellNotificationType } from '../../types'
import { assertCurrentPlayer } from '../../types/guards'

import { shovel } from './shovel'

describe('shovel', () => {
  describe('applyEffect', () => {
    test('draws two cards', () => {
      let game = stubGame()
      const { currentPlayerId } = game
      assertCurrentPlayer(currentPlayerId)

      game = updatePlayer(game, currentPlayerId, {
        deck: [stubCarrot, stubPumpkin, stubWater],
        hand: [],
      })

      const context = createGameStateMachineContext()
      vi.spyOn(context.shell, 'triggerNotification')

      const { game: updatedGame } = shovel.applyEffect({
        ...context,
        game,
      })

      expect(updatedGame.table.players[currentPlayerId].deck).toEqual([
        stubWater,
      ])
      expect(updatedGame.table.players[currentPlayerId].hand).toEqual([
        stubCarrot,
        stubPumpkin,
      ])

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
    test('sets game.cardsToDrawAtTurnStart to 0', () => {
      let game = stubGame()
      const { currentPlayerId } = game
      assertCurrentPlayer(currentPlayerId)

      game = updatePlayer(game, currentPlayerId, {
        deck: [stubCarrot, stubPumpkin, stubWater],
        hand: [],
      })

      const { game: newGame } = shovel.onStartFollowingTurn!({ ...stubContext, game })

      expect(newGame.cardsToDrawAtTurnStart).toBe(0)
    })
  })
})
