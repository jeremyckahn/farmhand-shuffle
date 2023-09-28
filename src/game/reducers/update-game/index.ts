import { IGame } from '../../types'

export const updateGame = (game: IGame, newGameProperties: Partial<IGame>) => {
  return { ...game, ...newGameProperties }
}
