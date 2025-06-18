import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import {
  isCropCardInstance,
  isEventCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { isCrop } from '../../../game/types/guards'

import { CardCore } from './CardCore'
import { CardCropText } from './CardCropText'
import {
  CardProps,
  CropCardProps,
  EventCardProps,
  WaterCardProps,
} from './types'

const isPropsCropCardProps = (props: CardProps): props is CropCardProps => {
  return isCropCardInstance(props.cardInstance)
}

const isPropsWaterCardProps = (props: CardProps): props is WaterCardProps => {
  return isWaterCardInstance(props.cardInstance)
}

const isPropsEventCardProps = (props: CardProps): props is EventCardProps => {
  return isEventCardInstance(props.cardInstance)
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

export const EventCard = forwardRef<HTMLDivElement, EventCardProps>(
  function EventCard(props, ref) {
    return (
      <CardCore {...props} ref={ref}>
        <ReactMarkdown>{props.cardInstance.description}</ReactMarkdown>
      </CardCore>
    )
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

  if (isPropsEventCardProps(props)) {
    return <EventCard {...props} ref={ref} />
  }

  throw new UnimplementedError('Unexpected CardType')
})
