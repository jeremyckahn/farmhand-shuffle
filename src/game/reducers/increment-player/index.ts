import { lookup } from '../../services/Lookup'
import { IGame } from '../../types'
import { updateGame } from '../update-game'

export const incrementPlayer = (game: IGame) => {
  const playerIds = lookup.playerIds(game)
  const nextPlayerIdx = lookup.nextPlayerIndex(game)

  game = updateGame(game, { currentPlayerId: playerIds[nextPlayerIdx] })

  return game
}
