import { addCropToField } from '../../reducers/add-crop-to-field'
import { factory } from '../../services/Factory'
import { lookup } from '../../services/Lookup'
import { InvalidCardError } from '../../services/Rules/errors'
import { InteractionHandlers } from '../../services/Rules/InteractionHandlers'
import { IGame, IPlayer } from '../../types'
import { isCrop } from '../../types/guards'

export const handlePlayFromHand = async (
  game: IGame,
  _interactionHandlers: InteractionHandlers,
  playerId: IPlayer['id'],
  cardIdx: number
  // eslint-disable-next-line @typescript-eslint/require-await
) => {
  const card = lookup.getCardFromHand(game, playerId, cardIdx)

  if (!isCrop(card)) {
    throw new InvalidCardError(`${card.id} is not a crop card.`)
  }

  const playedCrop = factory.buildPlayedCrop(card)
  game = addCropToField(game, playerId, playedCrop)

  return game
}
