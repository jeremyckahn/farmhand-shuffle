import shuffle from 'lodash.shuffle'

import * as crops from '../../cards/crops'
import {
  ICrop,
  IMatch,
  IPlayedCrop,
  isCropCardInstance,
} from '../../types'
import { updateMatch } from '../update-match'

export const updatePrices = (match: IMatch) => {
  const players = Object.values(match.table.players)
  const allCards = players.flatMap(player => [
    ...player.deck,
    ...player.hand,
    ...player.discardPile,
    ...player.field.crops
      .filter((c): c is IPlayedCrop => c !== undefined)
      .map(c => c.instance),
  ])

  const presentCropIds = new Set<string>()
  for (const card of allCards) {
    if (isCropCardInstance(card)) {
      presentCropIds.add(card.id)
    }
  }

  const availableCrops = Object.values(crops).filter(crop =>
    presentCropIds.has(crop.id)
  )

  const [cropToBuff, cropToNerf] = shuffle(availableCrops) as [
    ICrop | undefined,
    ICrop | undefined,
  ]

  // TODO: Make the buff/nerf multipliers variable
  match = updateMatch(match, {
    buffedCrop: cropToBuff
      ? {
          crop: cropToBuff,
          multiplier: 2,
        }
      : null,
    nerfedCrop: cropToNerf
      ? {
          crop: cropToNerf,
          multiplier: 0.5,
        }
      : null,
  })

  return match
}
