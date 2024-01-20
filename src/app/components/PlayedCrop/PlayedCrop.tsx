import { IPlayedCrop } from '../../../game/types'
import { Card, CropCardProps } from '../Card'

interface PlayedCropProps extends CropCardProps {
  playedCrop: IPlayedCrop
}

export const PlayedCrop = ({ ...rest }: PlayedCropProps) => {
  return <Card {...rest} />
}
