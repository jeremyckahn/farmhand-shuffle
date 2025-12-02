import { stubMatch } from '../../../test-utils/stubs/match'
import { IField } from '../../types'

import { factory } from '../../services/Factory'
import { stubCarrot } from '../../../test-utils/stubs/cards'

import { updateField } from '.'

describe('updateField', () => {
  test('updates field contents', () => {
    const match = stubMatch()
    const [player1Id] = Object.keys(match.table.players)
    const field: IField = {
      crops: [factory.buildPlayedCrop(stubCarrot)],
    }

    const newMatch = updateField(match, player1Id, field)

    expect(newMatch.table.players[player1Id].field).toEqual(field)
  })
})
