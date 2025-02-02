import { IGame } from '../../types'
import { updateGame } from '../update-game'

export const incrementPlayer = (game: IGame) => {
  const { currentPlayerId } = game
  // TODO: Don't rely on stable key order. Consider sorting the keys.
  const playerIds = Object.keys(game.table.players)

  if (currentPlayerId === null) {
    throw new TypeError('[TypeError] currentPlayerId must not be null')
  }

  const currentPlayerIdx = playerIds.indexOf(currentPlayerId)

  const newPlayerIdx = (currentPlayerIdx + 1) % playerIds.length
  game = updateGame(game, { currentPlayerId: playerIds[newPlayerIdx] })

  return game
}
