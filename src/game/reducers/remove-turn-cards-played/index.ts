import { IGame, IPlayer } from '../../types'
import { updatePlayer } from '../update-player'

/**
 * Removes a specified number of cards from the `cardsPlayedDuringTurn` array
 * for a given player.
 * @param game The game state.
 * @param playerId The ID of the player.
 * @param howMany The number of cards to remove. Defaults to Infinity, which
 * empties the `cardsPlayedDuringTurn` array.
 * @returns The updated game state.
 */
export const removeTurnCardsPlayed = (
  game: IGame,
  playerId: IPlayer['id'],
  howMany = Infinity
) => {
  const cardsPlayedDuringTurn =
    game.table.players[playerId].cardsPlayedDuringTurn.slice(howMany)

  game = updatePlayer(game, playerId, { cardsPlayedDuringTurn })

  return game
}
