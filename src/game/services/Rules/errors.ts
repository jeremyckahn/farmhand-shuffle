import { IPlayer } from '../../types'

export class PlayerOutOfFundsError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[PlayerOutOfFundsError] Player ${playerId} is out of funds.`
  }
}

export class GameStateCorruptError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[GameStateCorruptError] ${message}`
  }
}

export class FieldFullError extends Error {
  constructor() {
    super(...arguments)
    this.message = `[FieldFullError] There is no room in the field.`
  }
}

export class InvalidCardError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[InvalidCardError] ${message}`
  }
}
