import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { UnimplementedError } from '../../../game/services/Rules/errors'
import {
  isCropCardInstance,
  isEventCardInstance,
  isToolCardInstance,
  isWaterCardInstance,
} from '../../../game/types'
import { isCrop } from '../../../game/types/guards'

import { CardCore } from './CardCore'
import { CardCropText } from './CardCropText'
import {
  CardProps,
  CropCardProps,
  EventCardProps,
  ToolCardProps,
  WaterCardProps,
} from './types'
import { useCardInteractions } from './useCardInteractions'

const isPropsCropCardProps = (props: CardProps): props is CropCardProps => {
  return isCropCardInstance(props.cardInstance)
}

const isPropsWaterCardProps = (props: CardProps): props is WaterCardProps => {
  return isWaterCardInstance(props.cardInstance)
}

const isPropsEventCardProps = (props: CardProps): props is EventCardProps => {
  return isEventCardInstance(props.cardInstance)
}

const isPropsToolCardProps = (props: CardProps): props is ToolCardProps => {
  return isToolCardInstance(props.cardInstance)
}

export const CropCard = forwardRef<HTMLDivElement, CropCardProps>(
  function CropCard({ playedCrop, ...props }, ref) {
    const interactionProps = useCardInteractions(props)
    return (
      <CardCore {...props} {...interactionProps} ref={ref}>
        {isCrop(props.cardInstance) ? (
          <CardCropText crop={props.cardInstance} playedCrop={playedCrop} />
        ) : null}
      </CardCore>
    )
  }
)

export const WaterCard = forwardRef<HTMLDivElement, WaterCardProps>(
  function WaterCard(props, ref) {
    const interactionProps = useCardInteractions(props)
    return <CardCore {...props} {...interactionProps} ref={ref} />
  }
)

export const EventCard = forwardRef<HTMLDivElement, EventCardProps>(
  function EventCard(props, ref) {
    const interactionProps = useCardInteractions(props)
    return (
      <CardCore {...props} {...interactionProps} ref={ref}>
        <ReactMarkdown>{props.cardInstance.description}</ReactMarkdown>
      </CardCore>
    )
  }
)

export const ToolCard = forwardRef<HTMLDivElement, ToolCardProps>(
  function ToolCard(props, ref) {
    const interactionProps = useCardInteractions(props)
    return (
      <CardCore {...props} {...interactionProps} ref={ref}>
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

  if (isPropsToolCardProps(props)) {
    return <ToolCard {...props} ref={ref} />
  }

  throw new UnimplementedError('Unexpected CardType')
})
