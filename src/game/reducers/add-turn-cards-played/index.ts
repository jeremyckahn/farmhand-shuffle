import { CardInstance, IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

export const addCardsPlayedDuringTurn = (
  game: IGame,
  playerId: IPlayer['id'],
  cardInstances: CardInstance[]
) => {
  const cardsPlayedDuringTurn = [
    ...cardInstances,
    ...game.table.players[playerId].cardsPlayedDuringTurn,
  ]

  game = updatePlayer(game, playerId, { cardsPlayedDuringTurn })

  return game
}
