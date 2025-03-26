import { forwardRef } from 'react'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import { isCropCardInstance, isWaterCardInstance } from '../../../game/types'
import { isCrop } from '../../../game/types/guards'

import { CardCropText } from './CardCropText'
import { CardCore } from './CardCore'
import { CardProps, CropCardProps, WaterCardProps } from './types'

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
