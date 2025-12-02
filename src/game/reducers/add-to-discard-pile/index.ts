import { CardInstance, IMatch, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstance: CardInstance
) => {
  const discardPile = [
    cardInstance,
    ...match.table.players[playerId].discardPile,
  ]

  match = updatePlayer(match, playerId, { discardPile })

  return match
}
