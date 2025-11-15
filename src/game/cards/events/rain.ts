import { updateField } from '../../reducers/update-field'
import { CardType, IEvent } from '../../types'

export const rain: IEvent = Object.freeze<IEvent>({
  type: CardType.EVENT,
  id: 'rain',
  name: 'Rain',
  description: `Waters all unwatered, planted crops for **all** players.`,

  /**
   *  Gives all players an additional water card to each of their crops.
   *
   *  @param game - The current game state.
   *
   *  @returns The updated game state.
   */
  applyEffect: context => {
    let { game } = context

    for (const playerId in game.table.players) {
      const player = game.table.players[playerId]

      const crops = player.field.crops.map(crop => {
        if (!crop) return crop

        // NOTE: Always water all of the opponent's crops, even if they were
        // watered during the previous turn. This is achieved by only early
        // returning if the current crop belongs to the current player.
        if (playerId === game.currentPlayerId && crop.wasWateredDuringTurn) {
          return crop
        }

        return {
          ...crop,
          wasWateredDuringTurn: true,
          waterCards: crop?.waterCards + 1,
        }
      })

      // TODO: Show a notification indicating that all crops were watered

      game = updateField(game, playerId, { crops })
    }

    return { ...context, game }
  },
})
