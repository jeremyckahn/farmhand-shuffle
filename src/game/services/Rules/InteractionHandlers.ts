import { IGame, IPlayer } from '../../types'

/**
 * This interface is the sole connecting mechanism between the user-facing app
 * and the core game logic that are otherwise completely isolated from one
 * another.
 */
export interface InteractionHandlers {
  /**
   * Returns the index of the selected card in the IField array.
   */
  selectCropFromField: (game: IGame, playerId: IPlayer['id']) => Promise<number>
}
