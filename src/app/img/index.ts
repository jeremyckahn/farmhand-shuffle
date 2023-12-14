import { ICard } from '../../game/types/index'

import carrot from './cards/carrot.png'
import pumpkin from './cards/pumpkin.png'
import dirt from './ui/dirt.png'
import pixel from './ui/pixel.png'

export const cards = {
  carrot,
  pumpkin,
}

export const ui = {
  dirt,
  pixel,
}

export const isCardImageKey = (key: ICard['id']): key is keyof typeof cards => {
  return key in cards
}
