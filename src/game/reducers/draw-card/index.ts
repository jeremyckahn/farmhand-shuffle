import { randomNumber } from '../../../services/RandomNumber'
import { IMatch, IPlayer } from '../../types'
import { lookup } from '../../services/Lookup'
import { updatePlayer } from '../update-player'

export const drawCard = (
  match: IMatch,
  playerId: IPlayer['id'],
  howMany = 1
) => {
  const player = lookup.getPlayer(match, playerId)
  let newHand = [...player.hand]
  let newDeck = [...player.deck]
  let newDiscardPile = [...player.discardPile]

  const drawnCards = newDeck.slice(0, howMany)
  newDeck = newDeck.slice(howMany)

  newHand = [...newHand, ...drawnCards]

  if (newDeck.length === 0) {
    newDeck = randomNumber.shuffle(newDiscardPile)
    newDiscardPile = []
  }

  match = updatePlayer(match, playerId, {
    deck: newDeck,
    hand: newHand,
    discardPile: newDiscardPile,
  })

  return match
}
