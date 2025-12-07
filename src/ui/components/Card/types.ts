import { BoxProps, PaperProps } from '@mui/material'

import {
  CardInstance,
  EventInstance,
  IPlayedCrop,
  ToolInstance,
  WaterInstance,
} from '../../../game/types'
import { CardSize } from '../../types'

export interface CardInteractionProps {
  canBeHarvested?: boolean
  canBeWatered?: boolean
  isFocused?: boolean
  isInField?: boolean
  /**
   * Optional asynchronous operation to perform when the player plays the
   * card and before internal card play logic is run. This could be used to
   * perform an animation.
   */
  onBeforePlay?: () => Promise<void>
}

export interface BaseCardProps extends BoxProps, CardInteractionProps {
  cardInstance: CardInstance
  cardIdx: number
  disableEnterAnimation?: boolean
  imageScale?: number
  isFlipped?: boolean
  paperProps?: Partial<Omit<PaperProps, 'sx'>>
  playerId: string
  size?: CardSize
}

export interface CropCardProps extends BaseCardProps {
  playedCrop?: IPlayedCrop
}

export interface EventCardProps extends BaseCardProps {
  cardInstance: EventInstance
}

export interface ToolCardProps extends BaseCardProps {
  cardInstance: ToolInstance
}

export interface WaterCardProps extends BaseCardProps {
  cardInstance: WaterInstance
}

export type CardProps =
  | CropCardProps
  | EventCardProps
  | ToolCardProps
  | WaterCardProps

export type CardViewProps = Omit<CardProps, keyof CardInteractionProps> & {
  isBuffedCrop?: boolean
  isSessionOwnersCard?: boolean
  showPlayCardButton?: boolean
  showWaterCropButton?: boolean
  showHarvestCropButton?: boolean
  showWaterableState?: boolean
  showHarvestableState?: boolean
  tooltipTitle?: string
  onPlayCard?: () => Promise<void>
  onWaterCrop?: () => void
  onHarvestCrop?: () => void
}

// NOTE: We exclude `keyof CardProps` here to isolate the properties that are
// purely derived from the game state logic, separating them from the props
// that are passed in by the parent component.
export type CardInteractions = Omit<CardViewProps, keyof CardProps>
