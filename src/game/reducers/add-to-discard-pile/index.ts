import { ICard, IGame, IPlayer } from '../../types'
import { updateDiscardPile } from '../update-discard-pile'

export const addToDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  cardId: ICard['id']
) => {
  const newDiscardPile = [cardId, ...game.table.players[playerId].discardPile]
  game = updateDiscardPile(game, playerId, newDiscardPile)

  return game
}
