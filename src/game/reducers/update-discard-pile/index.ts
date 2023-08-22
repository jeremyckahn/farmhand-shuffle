import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player/index'

export const updateDiscardPile = (
  game: IGame,
  playerId: IPlayer['id'],
  discardPile: IPlayer['discardPile']
): IGame => {
  return updatePlayer(game, playerId, { discardPile })
}
