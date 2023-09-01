import { IGame } from '../../types/index'
import { updateGame } from '../update-game/index'

export const incrementPlayer = (game: IGame) => {
  const { currentPlayerId } = game
  const playerIds = Object.keys(game.table.players)

  if (currentPlayerId === null) {
    throw new TypeError('[TypeError]: currentPlayerId must not be null')
  }

  const currentPlayerIdx = playerIds.indexOf(currentPlayerId)

  const newPlayerIdx = (currentPlayerIdx + 1) % playerIds.length
  game = updateGame(game, { currentPlayerId: playerIds[newPlayerIdx] })

  return game
}
