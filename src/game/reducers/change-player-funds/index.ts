import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player/index'

export const changePlayerFunds = (
  game: IGame,
  playerId: IPlayer['id'],
  amount: number
) => {
  const { funds } = game.table.players[playerId]
  const newFunds = Math.max(0, funds + amount)

  game = updatePlayer(game, playerId, { funds: newFunds })

  return game
}
