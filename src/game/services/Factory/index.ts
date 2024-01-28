import { v4 as uuid } from 'uuid'

import { INITIAL_PLAYER_FUNDS } from '../../config'
import { ICrop, IField, IGame, IPlayedCrop, IPlayer, ITable } from '../../types'

export class FactoryService {
  buildField(overrides: Partial<IField> = {}): IField {
    return {
      crops: [],
      ...overrides,
    }
  }

  buildPlayer(overrides: Partial<IPlayer> = {}): IPlayer {
    return {
      id: uuid(),
      funds: INITIAL_PLAYER_FUNDS,
      deck: [],
      hand: [],
      discardPile: [],
      field: this.buildField(overrides?.field),
      ...overrides,
    }
  }

  buildTable(overrides: Partial<ITable> = {}): ITable {
    return {
      players: {},
      communityFund: 100,
      ...overrides,
    }
  }

  buildGame(
    overrides: Partial<IGame> = {},
    sessionOwnerPlayerId = uuid()
  ): IGame {
    const table = this.buildTable(overrides?.table)
    const { players } = table

    if (Object.keys(players).length === 0) {
      players[sessionOwnerPlayerId] = this.buildPlayer({
        id: sessionOwnerPlayerId,
      })
    }

    const [currentPlayerId = null] = Object.keys(players)

    return {
      sessionOwnerPlayerId,
      table,
      currentPlayerId,
      ...overrides,
    }
  }

  buildPlayedCrop({ id }: ICrop): IPlayedCrop {
    return {
      id,
      waterCards: 0,
    }
  }
}

export const factory = new FactoryService()
