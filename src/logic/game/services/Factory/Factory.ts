import { v4 as uuid } from 'uuid'

import { initialPlayerFunds } from '../../config'
import { Field, Game, Player, Table } from '../../types/index'

export class Factory {
  static buildField(): Field {
    return {
      crops: [],
    }
  }

  static buildPlayer(id = uuid()): Player {
    return {
      id,
      funds: initialPlayerFunds,
      deck: [],
      hand: [],
      discardPile: [],
      field: Factory.buildField(),
    }
  }

  static buildTable(): Table {
    const player1 = Factory.buildPlayer()

    return {
      // TODO: This is a WIP implementation. Design for supporting for multiple
      // players is not yet determined.
      players: { [player1.id]: player1 },

      communityFund: 0,
    }
  }

  static buildGame(): Game {
    return {
      table: Factory.buildTable(),
    }
  }
}
