import { stubGame } from '../../../test-utils/stubs/game'
import { carrot } from '../../cards'
import { factory } from '../../services/Factory'
import { updateField } from '../update-field'

import { updatePlayedCrop } from '.'

const game = stubGame()
const [player1Id] = Object.keys(game.table.players)

describe('updatePlayedCrop', () => {
  test('updates crop in field', () => {
    const playedCrop = factory.buildPlayedCrop(carrot)
    const field = {
      crops: [playedCrop],
    }

    let newGame = updateField(game, player1Id, field)
    newGame = updatePlayedCrop(newGame, player1Id, 0, { waterCards: 1 })

    expect(newGame.table.players[player1Id].field.crops).toEqual([
      { ...playedCrop, waterCards: 1 },
    ])
  })

  test('throws an error if invalid cropIdx is provided', () => {
    const playedCrop = factory.buildPlayedCrop(carrot)
    const field = {
      crops: [playedCrop],
    }

    let newGame = updateField(game, player1Id, field)

    expect(() => {
      updatePlayedCrop(newGame, player1Id, -1, { waterCards: 1 })
    }).toThrow('cropIdx -1 references a crop that is not in the field.')
  })
})
