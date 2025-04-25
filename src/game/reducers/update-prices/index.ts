import shuffle from 'lodash.shuffle'

import * as crops from '../../cards/crops'
import { IGame } from '../../types'
import { updateGame } from '../update-game'

export const updatePrices = (game: IGame) => {
  // TODO: Only buff/nerf crops that are present in either player's decks
  const [cropToBuff, cropToNerf] = shuffle(Object.values(crops))

  // TODO: Make the buff/nerf multipliers variable
  game = updateGame(game, {
    buffedCrop: {
      crop: cropToBuff,
      multiplier: 2,
    },
    nerfedCrop: {
      crop: cropToNerf,
      multiplier: 0.5,
    },
  })

  return game
}
