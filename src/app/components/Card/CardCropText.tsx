import Typography from '@mui/material/Typography'

import { ICrop, IPlayedCrop } from '../../../game/types'

export const CardCropText = ({
  crop,
  playedCrop,
}: {
  crop: ICrop
  playedCrop?: IPlayedCrop
}) => {
  if (playedCrop) {
    return (
      <Typography>
        Water cards attached: {playedCrop.waterCards}/{crop.waterToMature}
      </Typography>
    )
  }

  return <Typography>Water needed to mature: {crop.waterToMature}</Typography>
}
