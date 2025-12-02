import shuffle from 'lodash.shuffle'

import * as crops from '../../cards/crops'
import { IMatch } from '../../types'
import { updateMatch } from '../update-match'

export const updatePrices = (match: IMatch) => {
  // TODO: Only buff/nerf crops that are present in either player's decks
  const [cropToBuff, cropToNerf] = shuffle(Object.values(crops))

  // TODO: Make the buff/nerf multipliers variable
  match = updateMatch(match, {
    buffedCrop: {
      crop: cropToBuff,
      multiplier: 2,
    },
    nerfedCrop: {
      crop: cropToNerf,
      multiplier: 0.5,
    },
  })

  return match
}
