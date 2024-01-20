import { IPlayedCrop } from '../../../game/types'
import { CardSize } from '../../types'
import { Card, CropCardProps } from '../Card'

interface PlayedCropProps extends CropCardProps {
  playedCrop: IPlayedCrop
}

export const PlayedCrop = ({ ...rest }: PlayedCropProps) => {
  return <Card size={CardSize.MEDIUM} {...rest} />
}
