import { STANDARD_TAX_AMOUNT } from '../../config'
import { PlayerOutOfFundsError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { payFromPlayerToCommunity } from '../pay-from-player-to-community'

export const startTurn = (game: IGame, playerId: IPlayer['id']): IGame => {
  game = payFromPlayerToCommunity(game, STANDARD_TAX_AMOUNT, playerId)

  if (game.table.players[playerId].funds === 0) {
    throw new PlayerOutOfFundsError(playerId)
  }

  game = drawCard(game, playerId)

  return game
}
