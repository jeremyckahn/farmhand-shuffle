import { CardInstance, IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updatePlayer } from '../update-player'

export const addCardsPlayedDuringTurn = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstances: CardInstance[]
) => {
  const player = lookup.getPlayer(match, playerId)

  const cardsPlayedDuringTurn = [...cardInstances, ...player.cardsPlayedDuringTurn]

  match = updatePlayer(match, playerId, { cardsPlayedDuringTurn })

  return match
}
