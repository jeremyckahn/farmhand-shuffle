import { CardInstance, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardInstancestance: CardInstance
) => {
  const discardPile = [
    cardInstancestance,
    ...game.table.players[playerId].discardPile,
  ]
  game = updatePlayer(game, playerId, { discardPile })

  return game
}
