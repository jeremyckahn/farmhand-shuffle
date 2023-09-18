import { IGame, IPlayer } from '../../types'

export interface InteractionHandlers {
  /**
   * Returns the index of the selected card in the IField array.
   */
  selectCropFromField: (game: IGame, playerId: IPlayer['id']) => Promise<number>
}
