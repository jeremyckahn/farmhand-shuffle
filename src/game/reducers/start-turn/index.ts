import { STANDARD_TAX_AMOUNT } from '../../config'
import { PlayerOutOfFundsError } from '../../services/Rules/errors'
import { IMatch, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { payFromPlayerToCommunity } from '../pay-from-player-to-community'
import { updatePlayedCrop } from '../update-played-crop'
import { updatePlayer } from '../update-player'
import { updatePrices } from '../update-prices'

export const startTurn = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardsToDraw = 1
): IMatch => {
  match = updatePlayer(match, playerId, { cardsPlayedDuringTurn: [] })
  match = payFromPlayerToCommunity(match, STANDARD_TAX_AMOUNT, playerId)

  if (match.table.players[playerId].funds === 0) {
    throw new PlayerOutOfFundsError(playerId)
  }

  match = drawCard(match, playerId, cardsToDraw)

  const crops = match.table.players[playerId].field.crops

  for (let i = 0; i < crops.length; i++) {
    if (crops[i] === undefined) {
      continue
    }

    match = updatePlayedCrop(match, playerId, i, {
      wasWateredDuringTurn: false,
    })
  }

  match = updatePrices(match)

  return match
}
