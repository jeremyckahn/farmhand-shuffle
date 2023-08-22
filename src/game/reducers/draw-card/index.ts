import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const drawCard = (game: IGame, playerId: IPlayer['id'], howMany = 1) => {
  let newHand = [...game.table.players[playerId].hand]
  const newDeck = [...game.table.players[playerId].deck]

  const drawnCards = newDeck.splice(0, howMany)
  newHand = [...newHand, ...drawnCards]

  game = updatePlayer(game, playerId, { deck: newDeck, hand: newHand })

  return game
}
