import { v4 as uuid } from 'uuid'

import { initialPlayerFunds } from '../../config'
import { IField, IGame, IPlayer, ITable } from '../../types/index'

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
    const player1 = Factory.buildPlayer()

    return {
      // TODO: This is a WIP implementation. Design for supporting for multiple
      // players is not yet determined.
      players: { [player1.id]: player1 },

      communityFund: 0,
    }
  }

  static buildGame(): IGame {
    return {
      table: Factory.buildTable(),
    }
  }
}
