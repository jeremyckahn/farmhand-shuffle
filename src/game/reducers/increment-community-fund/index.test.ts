import { stubMatch } from '../../../test-utils/stubs/match'
import { IMatch } from '../../types'
import { updateTable } from '../update-table'

import { incrementCommunityFund } from '.'

describe('incrementCommunityFund', () => {
  let match: IMatch

  beforeEach(() => {
    match = stubMatch()
  })

  test('adds funds', () => {
    const newMatch = incrementCommunityFund(match, 5)
    expect(newMatch.table.communityFund).toEqual(match.table.communityFund + 5)
  })

  test('removes funds', () => {
    match = updateTable(match, { communityFund: 50 })

    const newMatch = incrementCommunityFund(match, -5)
    expect(newMatch.table.communityFund).toEqual(match.table.communityFund - 5)
  })

  test('does not remove more funds than the community fund has', () => {
    const newMatch = incrementCommunityFund(
      match,
      -match.table.communityFund - 1
    )

    expect(newMatch.table.communityFund).toEqual(0)
  })
})
