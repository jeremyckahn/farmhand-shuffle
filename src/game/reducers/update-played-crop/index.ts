import { lookup } from '../../services/Lookup'
import { IMatch, IPlayedCrop, IPlayer } from '../../types'
import { assertIsPlayedCrop } from '../../types/assertions'
import { updateField } from '../update-field'

export const updatePlayedCrop = (
  match: IMatch,
  playerId: IPlayer['id'],
  cropIdx: number,
  newPlayedCropProperties: Partial<IPlayedCrop>
) => {
  const player = lookup.getPlayer(match, playerId)
  const { cards } = player.field
  const playedCrop = cards[cropIdx]

  if (!playedCrop) {
    throw new RangeError(
      `cropIdx ${cropIdx} references a crop that is not in the field.`
    )
  }

  assertIsPlayedCrop(playedCrop)

  const newCards = [
    ...cards.slice(0, cropIdx),
    { ...playedCrop, ...newPlayedCropProperties },
    ...cards.slice(cropIdx + 1),
  ]

  match = updateField(match, playerId, {
    cards: newCards,
  })

  return match
}
