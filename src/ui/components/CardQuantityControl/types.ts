import { Dispatch, SetStateAction } from 'react'

import { ICard } from '../../../game/types'

export interface CardQuantityControlProps {
  card: ICard
  quantity: number
  onChange: Dispatch<SetStateAction<number>>
}
