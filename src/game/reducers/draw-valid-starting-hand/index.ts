import shuffle from 'lodash.shuffle'

import { randomNumber } from '../../../services/RandomNumber'
import { INITIAL_HAND_SIZE } from '../../config'
import { lookup } from '../../services/Lookup'
import { GameStateCorruptError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { pullCardFromDeck } from '../pull-card-from-deck'
import { updatePlayer } from '../update-player'

export const drawValidStartingHand = (game: IGame, playerId: IPlayer['id']) => {
  const cropIdxs = lookup.findCropIndexesInDeck(
    game,
    playerId,
    game.table.players[playerId].deck.length
  )
  const randomCropIdx = randomNumber.chooseElement(cropIdxs)

  if (randomCropIdx === undefined) {
    throw new GameStateCorruptError(
      'Could not select a crop card for starting hand: No crop cards available in deck.'
    )
  }

  game = pullCardFromDeck(game, playerId, randomCropIdx)
  game = updatePlayer(game, playerId, {
    hand: shuffle(game.table.players[playerId].hand),
  })
  game = drawCard(game, playerId, INITIAL_HAND_SIZE - 1)

  return game
}
