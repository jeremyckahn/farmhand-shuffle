import { CardType, ITool } from '../../types'
import { assertIsNonNullable, isPlayedCrop } from '../../types/guards'

export const fertilizer: ITool = Object.freeze<ITool>({
  type: CardType.TOOL,
  id: 'fertilizer',
  name: 'Fertilizer',
  description: `Adjacent crops provide +10 extra funds when harvested.`,

  isPlantable: true,

  /**
   * Provides a bonus to the sale value of adjacent crops.
   *
   * @param match - The current match state.
   * @returns The updated match state.
   */
  applyDailyEffect: (context, idxOfCardInField) => {
    // Fertilizer provides a static bonus based on position,
    // so no daily state change is required.
    return context
  },
})
