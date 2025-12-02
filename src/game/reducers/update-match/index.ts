import { IMatch } from '../../types'

export const updateMatch = (
  match: IMatch,
  newMatchProperties: Partial<IMatch>
) => {
  return { ...match, ...newMatchProperties }
}
