import { CardType, IGame, IPlayer } from '../../types'

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

  // TODO: Handle scenario where there are no cards in the hand
  /**
   * Returns the index of the selected card in the IPlayer['hand'] array.
   *
   * - The implementation of this function MUST return a -1 if a crop card is
   *   not or cannot be selected.
   */
  selectCardFromHand: (
    game: IGame,
    playerId: IPlayer['id'],
    cardType?: CardType
  ) => Promise<number>
}
