import { randomNumber } from '../../../services/RandomNumber'
import { INITIAL_HAND_SIZE } from '../../config'
import { lookup } from '../../services/Lookup'
import { IGame, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { pullCardFromDeck } from '../pull-card-from-deck'

export const drawValidStartingHand = (game: IGame, player: IPlayer) => {
  const cropIdxs = lookup.findCropIndexesInDeck(
    game,
    player.id,
    player.deck.length
  )
  const randomCropIdx = randomNumber.chooseElement(cropIdxs)

  game = pullCardFromDeck(game, player.id, randomCropIdx)
  game = drawCard(game, player.id, INITIAL_HAND_SIZE - 1)

  return game
}
