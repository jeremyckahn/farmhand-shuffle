import { ICard, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  card: ICard
) => {
  const discardPile = [card, ...game.table.players[playerId].discardPile]
  game = updatePlayer(game, playerId, { discardPile })

  return game
}
