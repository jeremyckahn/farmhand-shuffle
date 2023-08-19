import { v4 as uuid } from 'uuid'

import { initialPlayerFunds } from '../../config'
import { IField, IGame, IPlayer, ITable } from '../../types'

export class Factory {
  static buildField(): IField {
    return {
      crops: [],
    }
  }

  static buildPlayer(id = uuid()): IPlayer {
    return {
      id,
      funds: initialPlayerFunds,
      deck: [],
      hand: [],
      discardPile: [],
      field: Factory.buildField(),
    }
  }

  static buildTable(): ITable {
    return {
      players: {},
      communityFund: 100,
    }
  }

  static buildGame(): IGame {
    return {
      table: Factory.buildTable(),
    }
  }
}
