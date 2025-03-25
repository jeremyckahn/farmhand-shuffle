import { BoxProps } from '@mui/material/Box'
import { PaperProps } from '@mui/material/Paper'
import { forwardRef } from 'react'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import {
  CardInstance,
  IPlayedCrop,
  isCropCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { isCrop } from '../../../game/types/guards'
import { CardSize } from '../../types'

import { CardCropText } from './CardCropText'
import { CardCore } from './CardCore'

export interface BaseCardProps extends BoxProps {
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

const isPropsCropCardProps = (props: CardProps): props is CropCardProps => {
  return isCropCardInstance(props.cardInstance)
}

const isPropsWaterCardProps = (props: CardProps): props is WaterCardProps => {
  return isWaterCardInstance(props.cardInstance)
}

export const CropCard = forwardRef<HTMLDivElement, CropCardProps>(
  function CropCard({ playedCrop, ...props }, ref) {
    return (
      <CardCore {...props} ref={ref}>
        {isCrop(props.cardInstance) ? (
          <CardCropText crop={props.cardInstance} playedCrop={playedCrop} />
        ) : null}
      </CardCore>
    )
  }
)

export const WaterCard = forwardRef<HTMLDivElement, WaterCardProps>(
  function WaterCard(props, ref) {
    return <CardCore {...props} ref={ref} />
  }
)

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  props,
  ref
) {
  if (isPropsCropCardProps(props)) {
    return <CropCard {...props} ref={ref} />
  }

  if (isPropsWaterCardProps(props)) {
    return <WaterCard {...props} ref={ref} />
  }

  throw new UnimplementedError('Unexpected CardType')
})
