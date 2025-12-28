import { Dispatch, SetStateAction } from 'react'

import { ICard } from '../../../game/types'
import { CardSize } from '../../types'

export interface CardQuantityControlProps {
  card: ICard
  quantity: number
  onChange: Dispatch<SetStateAction<number>>
  cardSize?: CardSize
  isIncreaseDisabled?: boolean
  disabled?: boolean
}
