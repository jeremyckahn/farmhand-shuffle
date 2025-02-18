import { STANDARD_TAX_AMOUNT } from '../../config'
import { PlayerOutOfFundsError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { payFromPlayerToCommunity } from '../pay-from-player-to-community'
import { updatePlayedCrop } from '../update-played-crop'

export const startTurn = (game: IGame, playerId: IPlayer['id']): IGame => {
  game = payFromPlayerToCommunity(game, STANDARD_TAX_AMOUNT, playerId)

  if (game.table.players[playerId].funds === 0) {
    throw new PlayerOutOfFundsError(playerId)
  }

  game = drawCard(game, playerId)

  for (let i = 0; i < game.table.players[playerId].field.crops.length; i++) {
    game = updatePlayedCrop(game, playerId, i, { wasWateredTuringTurn: false })
  }

  return game
}
