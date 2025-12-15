import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubField } from '../../../test-utils/stubs/field'
import { stubMatch } from '../../../test-utils/stubs/match'
import { STANDARD_FIELD_SIZE } from '../../config'
import { factory } from '../../services/Factory'
import { FieldFullError } from '../../services/Rules/errors'
import { updateField } from '../update-field'

import { addCropToField } from '.'

describe('addCropToField', () => {
  test('adds crop to field', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const playedCrop = factory.buildPlayedCrop(stubCarrot)

    const newMatch = addCropToField(match, player1Id, playedCrop)

    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.field.crops).toEqual([playedCrop])
  })

  test('adds crop to empty slot in sparse field', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const playedCrop = factory.buildPlayedCrop(stubCarrot)
    const insertedCrop = factory.buildPlayedCrop(stubPumpkin)

    // Initialize field with some empty plots (undefined values)
    const initialCrops = [playedCrop, undefined, playedCrop, undefined]
    const sparseField = stubField({ crops: initialCrops })
    const matchWithSparseField = updateField(match, player1Id, sparseField)

    const newMatch = addCropToField(
      matchWithSparseField,
      player1Id,
      insertedCrop
    )

    const expectedCrops = [playedCrop, insertedCrop, playedCrop, undefined]
    const newPlayer = newMatch.table.players[player1Id]

    if (!newPlayer) {
      throw new Error('Player not found')
    }

    expect(newPlayer.field.crops).toEqual(expectedCrops)
  })

  test('throws an error if field is full', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)

    if (!player1Id) {
      throw new Error('Player not found')
    }

    const playedCrop = factory.buildPlayedCrop(stubCarrot)

    const fullField = stubField({
      crops: new Array(STANDARD_FIELD_SIZE).fill(playedCrop),
    })

    const newMatch = updateField(match, player1Id, fullField)

    expect(() => {
      addCropToField(newMatch, player1Id, playedCrop)
    }).toThrow(FieldFullError)
  })
})
