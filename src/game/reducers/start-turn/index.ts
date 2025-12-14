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
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  match = updatePlayer(match, playerId, { cardsPlayedDuringTurn: [] })
  match = payFromPlayerToCommunity(match, STANDARD_TAX_AMOUNT, playerId)

  const playerAfterPayment = match.table.players[playerId]

  if (!playerAfterPayment) {
    // This should not happen if payFromPlayerToCommunity is correct
    throw new Error(`Player not found after payment: ${playerId}`)
  }

  if (playerAfterPayment.funds === 0) {
    throw new PlayerOutOfFundsError(playerId)
  }

  match = drawCard(match, playerId, cardsToDraw)

  const playerAfterDraw = match.table.players[playerId]

  if (!playerAfterDraw) {
    // This should not happen if drawCard is correct
    throw new Error(`Player not found after draw: ${playerId}`)
  }

  const crops = playerAfterDraw.field.crops

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
