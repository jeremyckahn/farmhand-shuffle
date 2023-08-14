import { IGame, IPlayer } from '../../types'
import { updateDeck } from '../update-deck'
import { updateHand } from '../update-hand'

// FIXME: Test this
export const drawCard = (game: IGame, playerId: IPlayer['id'], howMany = 1) => {
  let newHand = [...game.table.players[playerId].hand]
  const newDeck = [...game.table.players[playerId].deck]

  const drawnCards = newDeck.splice(0, howMany)
  newHand = [...newHand, ...drawnCards]

  game = updateDeck(game, playerId, newDeck)
  game = updateHand(game, playerId, newHand)

  return game
}
