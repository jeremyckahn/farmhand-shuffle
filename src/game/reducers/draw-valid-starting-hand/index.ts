import { randomNumber } from '../../../services/RandomNumber'
import { INITIAL_HAND_SIZE } from '../../config'
import { lookup } from '../../services/Lookup'
import { MatchStateCorruptError } from '../../services/Rules/errors'
import { IMatch, IPlayer } from '../../types'
import { drawCard } from '../draw-card'
import { pullCardFromDeck } from '../pull-card-from-deck'
import { updatePlayer } from '../update-player'

export const drawValidStartingHand = (
  match: IMatch,
  playerId: IPlayer['id']
) => {
  const player = lookup.getPlayer(match, playerId)
  const cropIdxs = lookup.findCropIndexesInDeck(
    match,
    playerId,
    player.deck.length
  )
  const randomCropIdx = randomNumber.chooseElement(cropIdxs)

  if (randomCropIdx === undefined) {
    throw new MatchStateCorruptError(
      'Could not select a crop card for starting hand: No crop cards available in deck.'
    )
  }

  match = pullCardFromDeck(match, playerId, randomCropIdx)
  const playerAfterPull = lookup.getPlayer(match, playerId)
  match = updatePlayer(match, playerId, {
    hand: randomNumber.shuffle(playerAfterPull.hand),
  })
  match = drawCard(match, playerId, INITIAL_HAND_SIZE - 1)

  return match
}
