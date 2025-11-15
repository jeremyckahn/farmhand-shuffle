import { ICard } from '../../game/types'

import carrot from './cards/carrot.png'
import pumpkin from './cards/pumpkin.png'
import water from './cards/watering-can.png'
import rain from './cards/raincloud.png'
import shovel from './cards/shovel.png'
import brownDotBackground from './ui/brown-dot-bg.png'
import dirt from './ui/dirt.png'
import pixel from './ui/pixel.png'

export const cards = {
  carrot,
  pumpkin,
  rain,
  shovel,
  water,
}

export const ui = {
  dirt,
  pixel,
  brownDotBackground,
}

export const isCardImageKey = (key: ICard['id']): key is keyof typeof cards => {
  return key in cards
}
