import { randomNumber } from '../../../services/RandomNumber'
import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { instantiate, water } from '../../cards'
import { DECK_SIZE } from '../../config'
import { CardInstance, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

import { drawValidStartingHand } from '.'

describe('drawValidStartingHand', () => {
  test('ensures a hand with at least one crop is pulled', () => {
    vitest.spyOn(randomNumber, 'generate').mockReturnValue(1)

    let game = stubGame()

    const hand: IPlayer['hand'] = []

    // NOTE: The one crop card is placed at the bottom of the deck here
    const deck = [
      ...new Array<CardInstance>(DECK_SIZE - 1).fill(instantiate(water)),
      stubCarrot,
    ]

    game = updatePlayer(game, stubPlayer1.id, {
      hand,
      deck,
    })

    game = drawValidStartingHand(game, stubPlayer1.id)

    expect(game.table.players[stubPlayer1.id].hand).toContain(stubCarrot)
  })
})
