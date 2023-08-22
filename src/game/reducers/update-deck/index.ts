import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player/index'

export const updateDeck = (
  game: IGame,
  playerId: IPlayer['id'],
  deck: IPlayer['deck']
): IGame => {
  return updatePlayer(game, playerId, { deck })
}
