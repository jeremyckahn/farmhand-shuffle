import { IPlayer } from '../../types'

export class PlayerOutOfFundsError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[PlayerOutOfFundsError] Player ${playerId} is out of funds.`
  }
}

export class GameStateCorruptError extends Error {
  constructor() {
    super(...arguments)
    this.message = `[GameStateCorruptError] Game is in a corrupt state.`
  }
}
