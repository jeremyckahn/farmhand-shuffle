import { stubGame } from '../../../test-utils/stubs/game'
import { stubField } from '../../../test-utils/stubs/field'
import { carrot } from '../../cards'
import { updateField } from '../update-field'
import { STANDARD_FIELD_SIZE } from '../../config'
import { factory } from '../../services/Factory'
import { FieldFullError } from '../../services/Rules/errors'

import { addCropToField } from '.'

describe('addCropToField', () => {
  test('adds crop to field', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(carrot)

    const newGame = addCropToField(game, player1Id, playedCrop)

    expect(newGame.table.players[player1Id].field.crops).toEqual([playedCrop])
  })

  test('throws an error if field is full', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(carrot)

    const fullField = stubField({
      crops: new Array(STANDARD_FIELD_SIZE).fill(playedCrop),
    })

    const newGame = updateField(game, player1Id, fullField)

    expect(() => {
      addCropToField(newGame, player1Id, playedCrop)
    }).toThrow(FieldFullError)
  })
})
