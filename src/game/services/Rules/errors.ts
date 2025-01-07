/* eslint-disable prefer-rest-params */
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

export class InvalidCardIndexError extends Error {
  constructor(cardIdx: number, playerId: string) {
    super(...arguments)
    this.message = `[InvalidCardIndexError] Card index ${cardIdx} is out of bounds for player ${playerId}.`
  }
}

export class InvalidCardError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[InvalidCardError] ${message}`
  }
}

export class InvalidIdError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[InvalidIdError] ${message}`
  }
}

export class PlayerAbortError extends Error {
  constructor() {
    super(...arguments)
    this.message = `[PlayerAbortError] The player cancelled the operation.`
  }
}

export class UnimplementedError extends Error {
  constructor(message: string) {
    super(...arguments)
    this.message = `[UnimplementedError] ${message}`
  }
}
