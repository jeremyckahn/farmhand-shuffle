import { randomNumber } from '../../../services/RandomNumber'
import * as crops from '../../cards/crops'
import {
  CardInstance,
  ICrop,
  IMatch,
  IPlayedCrop,
  isCropCardInstance,
} from '../../types'
import { updateMatch } from '../update-match'

export const updatePrices = (match: IMatch) => {
  const players = Object.values(match.table.players)
  const allCards = players.reduce((acc, player) => {
    return [
      ...acc,
      ...player.deck,
      ...player.hand,
      ...player.discardPile,
      ...player.field.crops
        .filter(
          (playedCrop): playedCrop is IPlayedCrop => playedCrop !== undefined
        )
        .map(playedCrop => playedCrop.instance),
    ]
  }, [] as CardInstance[])

  const presentCropIds = new Set(
    allCards.filter(isCropCardInstance).map(card => card.id)
  )

  const availableCrops = Object.values(crops).filter(crop =>
    presentCropIds.has(crop.id)
  )

  // NOTE: Explicitly casting to a tuple with undefined elements is necessary here.
  // Without strict null checks on array access (noUncheckedIndexedAccess),
  // TypeScript assumes the array elements are defined (ICrop).
  // However, availableCrops can be empty or have fewer than 2 elements,
  // so we must ensure we handle undefined values safely.
  const [cropToBuff, cropToNerf] = randomNumber.shuffle(availableCrops) as [
    ICrop | undefined,
    ICrop | undefined
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
