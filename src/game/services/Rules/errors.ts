import { IPlayer } from '../../types'

export class PlayerOutOfFundsError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[PlayerOutOfFundsError] Player ${playerId} is out of funds.`
  }
}
