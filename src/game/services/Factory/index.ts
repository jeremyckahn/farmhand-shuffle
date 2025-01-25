import { v4 as uuid } from 'uuid'

import { INITIAL_HAND_SIZE, INITIAL_PLAYER_FUNDS } from '../../config'
import {
  ICrop,
  IField,
  IGame,
  IPlayedCrop,
  IPlayer,
  IPlayerSeed,
  ITable,
} from '../../types'
import { updateTable } from '../../reducers/update-table'
import { randomNumber } from '../../../services/RandomNumber'
import { drawCard } from '../../reducers/draw-card'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { updateGame } from '../../reducers/update-game'

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

  /**
   * Constructs a minimally valid IGame object.
   */
  buildGame(overrides: Partial<IGame> = {}, sessionOwnerPlayerId = uuid()) {
    const table = this.buildTable(overrides?.table)
    const { players } = table

    const [currentPlayerId = null] = Object.keys(players)

    let game: IGame = {
      sessionOwnerPlayerId,
      table,
      currentPlayerId,
      ...overrides,
    }

    if (Object.keys(players).length === 0) {
      game = updateTable(game, {
        players: {
          ...game.table.players,
          [sessionOwnerPlayerId]: this.buildPlayer({
            id: sessionOwnerPlayerId,
          }),
        },
      })
    }

    return game
  }

  /**
   * Constructs an IGame object that is ready to be used by the rules
   * processing engine.
   */
  buildGameForSession(
    playerSeeds: IPlayerSeed[],
    userPlayerId: string | undefined = playerSeeds[0]?.id
  ): IGame {
    let game = this.buildGame({}, userPlayerId)

    for (const playerSeed of playerSeeds) {
      const player = this.buildPlayer({
        ...playerSeed,
        funds: Math.floor(game.table.communityFund / playerSeeds.length),
      })

      game = updateTable(game, {
        players: { ...game.table.players, [player.id]: player },
      })
      game = shuffleDeck(game, player.id)
      game = drawCard(game, player.id, INITIAL_HAND_SIZE)
    }

    game = updateTable(game, {
      communityFund: game.table.communityFund % playerSeeds.length,
    })

    const firstPlayerId = randomNumber.chooseElement(
      Object.keys(game.table.players)
    )

    game = updateGame(game, { currentPlayerId: firstPlayerId })

    return game
  }

  buildPlayedCrop({ id }: ICrop): IPlayedCrop {
    return {
      id,
      waterCards: 0,
    }
  }
}

export const factory = new FactoryService()
