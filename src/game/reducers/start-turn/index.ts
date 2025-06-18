import { STANDARD_TAX_AMOUNT } from '../../config'
import { PlayerOutOfFundsError } from '../../services/Rules/errors'
import { IGame, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { payFromPlayerToCommunity } from '../pay-from-player-to-community'
import { updatePlayedCrop } from '../update-played-crop'
import { updatePrices } from '../update-prices'

export const startTurn = (game: IGame, playerId: IPlayer['id']): IGame => {
  game = payFromPlayerToCommunity(game, STANDARD_TAX_AMOUNT, playerId)

  if (game.table.players[playerId].funds === 0) {
    throw new PlayerOutOfFundsError(playerId)
  }

  game = drawCard(game, playerId)

  const crops = game.table.players[playerId].field.crops

  for (let i = 0; i < crops.length; i++) {
    if (crops[i] === undefined) {
      continue
    }

    game = updatePlayedCrop(game, playerId, i, { wasWateredDuringTurn: false })
  }

  game = updatePrices(game)

  return game
}
