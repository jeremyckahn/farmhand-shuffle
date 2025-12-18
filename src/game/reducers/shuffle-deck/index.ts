import { randomNumber } from '../../../services/RandomNumber'
import { IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updatePlayer } from '../update-player'

export const shuffleDeck = (match: IMatch, playerId: IPlayer['id']): IMatch => {
  const player = lookup.getPlayer(match, playerId)
  const { deck } = player
  const newDeck = randomNumber.shuffle(deck)

  return updatePlayer(match, playerId, { deck: newDeck })
}
