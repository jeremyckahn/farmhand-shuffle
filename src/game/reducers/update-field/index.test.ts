import { stubGame } from '../../../test-utils/stubs/game'
import { IField } from '../../types'

import { factory } from '../../services/Factory'
import { stubCarrot } from '../../../test-utils/stubs/cards'

import { updateField } from '.'

describe('updateField', () => {
  test('updates field contents', () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const field: IField = {
      crops: [factory.buildPlayedCrop(stubCarrot)],
    }

    const newGame = updateField(game, player1Id, field)

    expect(newGame.table.players[player1Id].field).toEqual(field)
  })
})
