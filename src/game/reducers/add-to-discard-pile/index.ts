import { CardInstance, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstance: CardInstance
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const discardPile = [cardInstance, ...player.discardPile]

  match = updatePlayer(match, playerId, { discardPile })

  return match
}
