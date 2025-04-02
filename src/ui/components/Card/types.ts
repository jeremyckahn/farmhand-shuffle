import { BoxProps, PaperProps } from '@mui/material'

import { CardInstance, IPlayedCrop } from '../../../game/types'
import { CardSize } from '../../types'

export interface BaseCardProps extends BoxProps {
  canBeHarvested?: boolean
  canBeWatered?: boolean
  cardInstance: CardInstance
  cardIdx: number
  disableEnterAnimation?: boolean
  imageScale?: number
  isFlipped?: boolean
  isFocused?: boolean
  isInField?: boolean
  paperProps?: Partial<Omit<PaperProps, 'sx'>>
  playerId: string
  size?: CardSize
  /**
   * Optional asynchronous operation to perform when the player plays the
   * card and before internal card play logic is run. This could be used to
   * perform an animation.
   */
  onBeforePlay?: () => Promise<void>
}

export interface CropCardProps extends BaseCardProps {
  playedCrop?: IPlayedCrop
}

export type WaterCardProps = BaseCardProps

export type CardProps = CropCardProps | WaterCardProps
