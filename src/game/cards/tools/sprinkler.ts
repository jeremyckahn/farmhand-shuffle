import { UnimplementedError } from '../../services/Rules/errors'
import { CardType, ITool } from '../../types'

export const sprinkler: ITool = Object.freeze<ITool>({
  type: CardType.TOOL,
  id: 'sprinkler',
  name: 'Sprinkler',
  description: `Waters adjacent crop cards when planted in the field.`,

  isPlantable: true,

  /**
   *  Waters adjacent crop cards when planted in the field
   *
   *  @param match - The current match state.
   *
   *  @returns The updated match state.
   */
  applyEffect: _context => {
    throw new UnimplementedError('sprinkler.applyEffect')
  },
})
