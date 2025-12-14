import { CardInstance, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addCardsPlayedDuringTurn = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstances: CardInstance[]
) => {
  const player = match.table.players[playerId]

  if (!player) {
    throw new Error(`Player not found: ${playerId}`)
  }

  const cardsPlayedDuringTurn = [...cardInstances, ...player.cardsPlayedDuringTurn]

  match = updatePlayer(match, playerId, { cardsPlayedDuringTurn })

  return match
}
