import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player/index'

export const updateHand = (
  game: IGame,
  playerId: IPlayer['id'],
  hand: IPlayer['hand']
): IGame => {
  return updatePlayer(game, playerId, { hand })
}
