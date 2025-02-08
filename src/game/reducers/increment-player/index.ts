import { IGame } from '../../types'
import { assertCurrentPlayer } from '../../types/guards'
import { updateGame } from '../update-game'

export const incrementPlayer = (game: IGame) => {
  const { currentPlayerId } = game

  assertCurrentPlayer(currentPlayerId)

  // TODO: Don't rely on stable key order. Consider sorting the keys.
  const playerIds = Object.keys(game.table.players)

  const currentPlayerIdx = playerIds.indexOf(currentPlayerId)
  const newPlayerIdx = (currentPlayerIdx + 1) % playerIds.length
  game = updateGame(game, { currentPlayerId: playerIds[newPlayerIdx] })

  return game
}
