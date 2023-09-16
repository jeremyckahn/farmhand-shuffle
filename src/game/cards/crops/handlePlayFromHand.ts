import { addCropToField } from '../../reducers/add-crop-to-field'
import { Factory } from '../../services/Factory'
import { Lookup } from '../../services/Lookup'
import { IGame, IPlayer } from '../../types'
import { isCrop } from '../../types/guards'

export const handlePlayFromHand = async (
  game: IGame,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  // FIXME: Test this.
  const card = Lookup.getCardFromHand(game, playerId, cardIdx)

  if (!isCrop(card)) {
    // FIXME: Use a custom error here
    throw new Error(`${card.id} is not a crop card`)
  }

  const playedCrop = Factory.buildPlayedCrop(card)
  addCropToField(game, playerId, playedCrop)

  return game
}
