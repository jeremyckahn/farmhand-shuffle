import { IGame } from '../../types'
import { assertCurrentPlayer } from '../../types/guards'
import { updateGame } from '../update-game'

export const incrementPlayer = (game: IGame) => {
  const { currentPlayerId } = game

  assertCurrentPlayer(currentPlayerId)

  const playerIds = Object.keys(game.table.players).sort()

  const currentPlayerIdx = playerIds.indexOf(currentPlayerId)
  const newPlayerIdx = (currentPlayerIdx + 1) % playerIds.length
  game = updateGame(game, { currentPlayerId: playerIds[newPlayerIdx] })

  return game
}
