import { lookup } from '../../services/Lookup'
import { IMatch } from '../../types'
import { updateMatch } from '../update-match'

export const incrementPlayer = (match: IMatch) => {
  const playerIds = lookup.playerIds(match)
  const nextPlayerIdx = lookup.nextPlayerIndex(match)

  match = updateMatch(match, { currentPlayerId: playerIds[nextPlayerIdx] })

  return match
}
