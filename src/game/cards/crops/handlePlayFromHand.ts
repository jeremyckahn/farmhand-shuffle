import { addCropToField } from '../../reducers/add-crop-to-field'
import { Factory } from '../../services/Factory'
import { Lookup } from '../../services/Lookup'
import { InvalidCardError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { isCrop } from '../../types/guards'

export const handlePlayFromHand = async (
  game: IGame,
  playerId: IPlayer['id'],
  cardIdx: number
) => {
  const card = Lookup.getCardFromHand(game, playerId, cardIdx)

  if (!isCrop(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  const playedCrop = Factory.buildPlayedCrop(card)
  game = addCropToField(game, playerId, playedCrop)

  return game
}
