import { IGame } from '../../types'
import { incrementPlayer } from '../increment-player'

export const endTurn = (game: IGame): IGame => {
  game = incrementPlayer(game)

  return game
}
