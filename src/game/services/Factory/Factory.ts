import { v4 as uuid } from 'uuid'

import { initialPlayerFunds } from '../../config'
import { IField, IGame, IPlayer, ITable } from '../../types'

export class Factory {
  static buildField(overrides: Partial<IField> = {}): IField {
    return {
      crops: [],
      ...overrides,
    }
  }

  static buildPlayer(overrides: Partial<IPlayer> = {}): IPlayer {
    return {
      id: uuid(),
      funds: initialPlayerFunds,
      deck: [],
      hand: [],
      discardPile: [],
      field: Factory.buildField(overrides?.field),
      ...overrides,
    }
  }

  static buildTable(overrides: Partial<ITable> = {}): ITable {
    return {
      players: {},
      communityFund: 100,
      ...overrides,
    }
  }

  static buildGame(overrides: Partial<IGame> = {}): IGame {
    return {
      table: Factory.buildTable(overrides?.table),
      ...overrides,
    }
  }
}
