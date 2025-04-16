import { stubCarrot, stubPumpkin } from '../../../test-utils/stubs/cards'
import { stubField } from '../../../test-utils/stubs/field'
import { stubGame } from '../../../test-utils/stubs/game'
import { STANDARD_FIELD_SIZE } from '../../config'
import { factory } from '../../services/Factory'
import { FieldFullError } from '../../services/Rules/errors'
import { updateField } from '../update-field'

import { addCropToField } from '.'

describe('addCropToField', () => {
  test('adds crop to field', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(stubCarrot)

    const newGame = addCropToField(game, player1Id, playedCrop)

    expect(newGame.table.players[player1Id].field.crops).toEqual([playedCrop])
  })

  test('adds crop to empty slot in sparse field', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(stubCarrot)
    const insertedCrop = factory.buildPlayedCrop(stubPumpkin)

    // Initialize field with some empty plots (undefined values)
    const initialCrops = [playedCrop, undefined, playedCrop, undefined]
    const sparseField = stubField({ crops: initialCrops })
    const gameWithSparseField = updateField(game, player1Id, sparseField)

    const newGame = addCropToField(gameWithSparseField, player1Id, insertedCrop)

    const expectedCrops = [playedCrop, insertedCrop, playedCrop, undefined]
    expect(newGame.table.players[player1Id].field.crops).toEqual(expectedCrops)
  })

  test('throws an error if field is full', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(stubCarrot)

    const fullField = stubField({
      crops: new Array(STANDARD_FIELD_SIZE).fill(playedCrop),
    })

    const newGame = updateField(game, player1Id, fullField)

    expect(() => {
      addCropToField(newGame, player1Id, playedCrop)
    }).toThrow(FieldFullError)
  })
})
