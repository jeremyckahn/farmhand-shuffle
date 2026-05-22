import { updatePlayedCrop } from '../../reducers/update-played-crop'
import { CardType, ITool } from '../../types'
import { assertIsNonNullable, isPlayedCrop } from '../../types/guards'

export const sprinkler: ITool = Object.freeze<ITool>({
  type: CardType.TOOL,
  id: 'sprinkler',
  name: 'Sprinkler',
  description: `Waters adjacent crop cards at the start of the owners turn when planted in the Field.`,

  isPlantable: true,

  /**
   *  Waters adjacent crop cards when planted in the field
   *
   *  @param match - The current match state.
   *
   *  @returns The updated match state.
   */
  applyDailyEffect: (context, idxOfCardInField) => {
    const {
      match: { currentPlayerId },
    } = context
    let { match } = context

    assertIsNonNullable(currentPlayerId)

    const currentPlayer = match.table.players[currentPlayerId]

    assertIsNonNullable(currentPlayer)

    const beforeCardIdx = idxOfCardInField - 1
    const afterCardIdx = idxOfCardInField + 1
    const beforeCard = currentPlayer.field.cards[beforeCardIdx]
    const afterCard = currentPlayer.field.cards[afterCardIdx]

    for (const { maybeCard, idx } of [
      { maybeCard: beforeCard, idx: beforeCardIdx },
      { maybeCard: afterCard, idx: afterCardIdx },
    ]) {
      if (!isPlayedCrop(maybeCard) || maybeCard.wasWateredDuringTurn) {
        continue
      }

      match = updatePlayedCrop(match, currentPlayerId, idx, {
        wasWateredDuringTurn: true,
        waterCards: maybeCard.waterCards + 1,
      })
    }

    context = { ...context, match }

    return context
  },
})
