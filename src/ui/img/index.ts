import { ICard } from '../../game/types'

import carrot from './cards/carrot.png'
import pumpkin from './cards/pumpkin.png'
import wateringCan from './cards/watering-can.png'
import rain from './cards/raincloud.png'
import brownDotBackground from './ui/brown-dot-bg.png'
import dirt from './ui/dirt.png'
import pixel from './ui/pixel.png'

export const cards = {
  carrot,
  pumpkin,
  rain,
  water: wateringCan,
}

export const ui = {
  dirt,
  pixel,
  brownDotBackground,
}

export const isCardImageKey = (key: ICard['id']): key is keyof typeof cards => {
  return key in cards
}
