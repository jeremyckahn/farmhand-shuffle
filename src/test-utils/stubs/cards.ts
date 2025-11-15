import {
  carrot,
  instantiate,
  pumpkin,
  rain,
  shovel,
  water,
} from '../../game/cards'
import {
  CropInstance,
  EventInstance,
  ToolInstance,
  WaterInstance,
} from '../../game/types'

export const stubCarrot: CropInstance = instantiate(carrot)
export const stubPumpkin: CropInstance = instantiate(pumpkin)
export const stubWater: WaterInstance = instantiate(water)
export const stubRain: EventInstance = instantiate(rain)
export const stubShovel: ToolInstance = instantiate(shovel)
