import { array } from '../../../services/Array'
import { InvalidCardIndexError } from '../../services/Rules/errors'
import { IGame, IPlayedCrop, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'
import { addCropToField } from '../add-crop-to-field'
import { lookup } from '../../services/Lookup'

export const moveCropFromHandToField = (
  game: IGame,
  playerId: IPlayer['id'],
  cropCardIdx: number
) => {
  const { hand } = game.table.players[playerId]
  const cardId = hand[cropCardIdx]

  if (!cardId) {
    throw new InvalidCardIndexError(cropCardIdx, playerId)
  }

  const newHand = array.removeAt(hand, cropCardIdx)
  const cropCard = lookup.getCropFromHand(game, playerId, cropCardIdx)

  const playedCropCard: IPlayedCrop = {
    id: cropCard.id,
    waterCards: 0,
  }

  game = addCropToField(game, playerId, playedCropCard)
  game = updatePlayer(game, playerId, { hand: newHand })

  return game
}
