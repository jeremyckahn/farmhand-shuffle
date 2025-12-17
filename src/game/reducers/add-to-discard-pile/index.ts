import { CardInstance, IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updatePlayer } from '../update-player'

export const addToDiscardPile = (
  match: IMatch,
  playerId: IPlayer['id'],
  cardInstance: CardInstance
) => {
  const player = lookup.getPlayer(match, playerId)
  const discardPile = [cardInstance, ...player.discardPile]

  match = updatePlayer(match, playerId, { discardPile })

  return match
}
