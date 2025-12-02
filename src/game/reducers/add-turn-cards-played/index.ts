import { CardInstance, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addCardsPlayedDuringTurn = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstances: CardInstance[]
) => {
  const cardsPlayedDuringTurn = [
    ...cardInstances,
    ...match.table.players[playerId].cardsPlayedDuringTurn,
  ]

  match = updatePlayer(match, playerId, { cardsPlayedDuringTurn })

  return match
}
