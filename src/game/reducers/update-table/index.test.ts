import { stubMatch } from '../../../test-utils/stubs/match'

import { updateTable } from '.'

describe('updateTable', () => {
  test('updates the community fund', () => {
    const match = stubMatch()
    const newMatch = updateTable(match, { communityFund: 123 })

    expect(newMatch.table.communityFund).toEqual(123)
  })
})
