import { CardInstance, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardInstance: CardInstance
) => {
  const discardPile = [
    cardInstance,
    ...game.table.players[playerId].discardPile,
  ]

  game = updatePlayer(game, playerId, { discardPile })

  return game
}
