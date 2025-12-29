import { ICard } from '../../../game/types'

export interface DeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => Promise<void>
  isLoading?: boolean
}
