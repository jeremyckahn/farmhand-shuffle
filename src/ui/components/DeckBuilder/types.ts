import { ICard } from '../../../game/types'

export interface DeckBuilderProps {
  onDone: (deck: Map<ICard, number>) => void | Promise<void>
  isLoading?: boolean
}
