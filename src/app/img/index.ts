import { ICard } from '../../game/types/index'

import carrot from './cards/carrot.png'
import dirt from './ui/dirt.png'

export const cards = {
  carrot,
}

export const ui = {
  dirt,
}

export const isCardKey = (key: ICard['id']): key is keyof typeof cards => {
  return key in cards
}
