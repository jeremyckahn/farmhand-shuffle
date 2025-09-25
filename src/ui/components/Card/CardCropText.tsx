import Typography from '@mui/material/Typography'

import { ICrop, IPlayedCrop } from '../../../game/types'

interface CropCardTextProps {
  crop: ICrop
  playedCrop?: IPlayedCrop
}

export const CardCropText = ({ crop, playedCrop }: CropCardTextProps) => {
  if (playedCrop) {
    return (
      <Typography>
        Water cards attached: {playedCrop.waterCards}/{crop.waterToMature}
      </Typography>
    )
  }

  return <Typography>Water needed to mature: {crop.waterToMature}</Typography>
}
