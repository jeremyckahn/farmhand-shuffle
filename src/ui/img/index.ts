import { ICard } from '../../game/types'

import carrot from './cards/carrot.png'
import corn from './cards/corn.png'
import garlic from './cards/garlic.png'
import pea from './cards/pea.png'
import potato from './cards/potato.png'
import pumpkin from './cards/pumpkin.png'
import tomato from './cards/tomato.png'
import water from './cards/watering-can.png'
import rain from './cards/raincloud.png'
import shovel from './cards/shovel.png'
import sprinkler from './cards/sprinkler.png'
import brownDotBackground from './ui/brown-dot-bg.png'
import dirt from './ui/dirt.png'
import pixel from './ui/pixel.png'

export const cards = {
  carrot,
  corn,
  garlic,
  pea,
  potato,
  pumpkin,
  rain,
  shovel,
  sprinkler,
  tomato,
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
