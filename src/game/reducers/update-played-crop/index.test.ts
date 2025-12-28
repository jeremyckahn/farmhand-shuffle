import { stubCarrot } from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { factory } from '../../services/Factory'
import { updateField } from '../update-field'

import { updatePlayedCrop } from '.'

const match = stubMatch()
const [player1Id] = Object.keys(match.table.players)

if (!player1Id) {
  throw new Error('Player not found')
}

describe('updatePlayedCrop', () => {
  test('updates crop in field', () => {
    const playedCrop = factory.buildPlayedCrop(stubCarrot)
    const field = {
      crops: [playedCrop],
    }

    let newMatch = updateField(match, player1Id, field)

    newMatch = updatePlayedCrop(newMatch, player1Id, 0, { waterCards: 1 })
    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.field.crops).toEqual([{ ...playedCrop, waterCards: 1 }])
  })

  test('throws an error if invalid cropIdx is provided', () => {
    const playedCrop = factory.buildPlayedCrop(stubCarrot)
    const field = {
      crops: [playedCrop],
    }

    const newMatch = updateField(match, player1Id, field)

    expect(() => {
      updatePlayedCrop(newMatch, player1Id, -1, { waterCards: 1 })
    }).toThrow('cropIdx -1 references a crop that is not in the field.')
  })
})
