import {
  carrot,
  corn,
  garlic,
  instantiate,
  pea,
  potato,
  pumpkin,
  rain,
  shovel,
  sprinkler,
  tomato,
  water,
} from '../../game/cards'
import {
  CropInstance,
  EventInstance,
  ToolInstance,
  WaterInstance,
} from '../../game/types'

export const stubCarrot: CropInstance = instantiate(carrot)
export const stubCorn: CropInstance = instantiate(corn)
export const stubGarlic: CropInstance = instantiate(garlic)
export const stubPea: CropInstance = instantiate(pea)
export const stubPotato: CropInstance = instantiate(potato)
export const stubPumpkin: CropInstance = instantiate(pumpkin)
export const stubTomato: CropInstance = instantiate(tomato)
export const stubWater: WaterInstance = instantiate(water)
export const stubRain: EventInstance = instantiate(rain)
export const stubShovel: ToolInstance = instantiate(shovel)
export const stubSprinkler: ToolInstance = instantiate(sprinkler)
