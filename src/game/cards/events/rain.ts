import { updateField } from '../../reducers/update-field'
import { CardType, IEvent, ShellNotificationType } from '../../types'
import { isPlayedCrop } from '../../types/guards'

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

      if (!player) continue

      const cards = player.field.cards.map(card => {
        if (!card) return card

        if (!isPlayedCrop(card)) {
          // FIXME: Validate that planted tools aren't watered
          return card
        }

        // NOTE: Always water all of the opponent's crops, even if they were
        // watered during the previous turn. This is achieved by only early
        // returning if the current crop belongs to the current player.
        if (playerId === match.currentPlayerId && card.wasWateredDuringTurn) {
          return card
        }

        return {
          ...card,
          wasWateredDuringTurn: true,
          waterCards: card.waterCards + 1,
        }
      })

      match = updateField(match, playerId, { cards })
    }

    context.shell.triggerNotification({
      type: ShellNotificationType.ALL_CROPS_WATERED,
      payload: {},
    })

    return { ...context, match }
  },
})
