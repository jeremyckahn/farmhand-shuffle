import { updateField } from '../../reducers/update-field'
import { CardType, IEvent, ShellNotificationType } from '../../types'

export const rain: IEvent = Object.freeze<IEvent>({
  type: CardType.EVENT,
  id: 'rain',
  name: 'Rain',
  description: `Waters all unwatered, planted crops for **all** players.`,

  /**
   *  Gives all players an additional water card to each of their crops.
   *
   *  @param match - The current match state.
   *
   *  @returns The updated match state.
   */
  applyEffect: context => {
    let { match } = context

    for (const playerId in match.table.players) {
      const player = match.table.players[playerId]

      const crops = player.field.crops.map(crop => {
        if (!crop) return crop

        // NOTE: Always water all of the opponent's crops, even if they were
        // watered during the previous turn. This is achieved by only early
        // returning if the current crop belongs to the current player.
        if (playerId === match.currentPlayerId && crop.wasWateredDuringTurn) {
          return crop
        }

        return {
          ...crop,
          wasWateredDuringTurn: true,
          waterCards: crop?.waterCards + 1,
        }
      })

      match = updateField(match, playerId, { crops })
    }

    context.shell.triggerNotification({
      type: ShellNotificationType.GENERIC_INFO,
      payload: {
        message: 'Watered all crops',
      },
    })

    return { ...context, match }
  },
})
