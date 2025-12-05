import { ICard } from '../../../game/types'

export interface CardQuantityControlProps {
  card: ICard
  quantity: number
  onChange: (quantity: number) => void
}
