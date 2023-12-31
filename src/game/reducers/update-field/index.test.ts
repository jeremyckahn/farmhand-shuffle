import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards'

import { updateField } from '.'

describe('updateField', () => {
  test('updates field contents', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const field = {
      crops: [{ ...carrot, waterCards: 0 }],
    }

    const newGame = updateField(game, player1Id, field)

    expect(newGame.table.players[player1Id].field).toEqual(field)
  })
})
