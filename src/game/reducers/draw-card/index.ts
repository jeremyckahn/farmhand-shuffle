import shuffle from 'lodash.shuffle'

import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const drawCard = (game: IGame, playerId: IPlayer['id'], howMany = 1) => {
  let newHand = [...game.table.players[playerId].hand]
  let newDeck = [...game.table.players[playerId].deck]
  let newDiscardPile = [...game.table.players[playerId].discardPile]

  const drawnCards = newDeck.splice(0, howMany)
  newHand = [...newHand, ...drawnCards]

  if (newDeck.length === 0) {
    newDeck = shuffle(newDiscardPile)
    newDiscardPile = []
  }

  game = updatePlayer(game, playerId, {
    deck: newDeck,
    hand: newHand,
    discardPile: newDiscardPile,
  })

  return game
}
