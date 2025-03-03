import { carrot, instantiate, pumpkin, water } from '../../game/cards'
import { CropInstance, WaterInstance } from '../../game/types'

export const stubCarrot: CropInstance = instantiate(carrot)
export const stubPumpkin: CropInstance = instantiate(pumpkin)
export const stubWater: WaterInstance = instantiate(water)
