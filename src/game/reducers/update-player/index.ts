import { IGame, IPlayer } from '../../types'

export const updatePlayer = (
  game: IGame,
  playerId: IPlayer['id'],
  newPlayerProperties: Partial<IPlayer>
): IGame => {
  const newGame = structuredClone(game)

  newGame.table.players[playerId] = {
    ...game.table.players[playerId],
    ...newPlayerProperties,
  }

  return newGame
}
