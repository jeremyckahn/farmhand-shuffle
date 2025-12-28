import { randomNumber } from '../../../services/RandomNumber'
import { MAX_RANDOM_VALUE } from '../../../test-utils/constants'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { instantiate, water } from '../../cards'
import { DECK_SIZE } from '../../config'
import { CardInstance, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { drawValidStartingHand } from '.'

describe('drawValidStartingHand', () => {
  test('ensures a hand with at least one crop is pulled', () => {
    vitest.spyOn(randomNumber, 'generate').mockReturnValue(MAX_RANDOM_VALUE)

    let match = stubMatch()

    const hand: IPlayer['hand'] = []

    // NOTE: The one crop card is placed at the bottom of the deck here
    const deck = [
      ...new Array<CardInstance>(DECK_SIZE - 1).fill(instantiate(water)),
      stubCarrot,
    ]

    match = updatePlayer(match, stubPlayer1.id, {
      hand,
      deck,
    })

    match = drawValidStartingHand(match, stubPlayer1.id)

    const player = match.table.players[stubPlayer1.id]
    if (!player) {
      throw new Error('Player not found')
    }

    expect(player.hand).toContain(stubCarrot)
  })
})
