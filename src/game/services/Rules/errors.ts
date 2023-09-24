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

// FIXME: Print the player ID
export class FieldFullError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[FieldFullError] Player ${playerId} has no room in the field.`
  }
}

export class FieldEmptyError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[FieldEmptyError] Player ${playerId} has no crops in the field.`
  }
}

export class InvalidCardError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[InvalidCardError] ${message}`
  }
}

export class PlayerAbortError extends Error {
  constructor() {
    super(...arguments)
    this.message = `[PlayerAbortError] The player cancelled the operation.`
  }
}

export class FieldEmptyError extends Error {
  constructor(playerId: IPlayer['id']) {
    super(...arguments)
    this.message = `[FieldEmptyError] Player ${playerId} has no crops in the field.`
  }
}

export class InvalidCardError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[InvalidCardError] ${message}`
  }
}

export class PlayerAbortError extends Error {
  constructor() {
    super(...arguments)
    this.message = `[PlayerAbortError] The player cancelled the operation.`
  }
}
