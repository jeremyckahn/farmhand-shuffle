import { v4 as uuid } from 'uuid'

import { INITIAL_PLAYER_FUNDS } from '../../config'
import { drawValidStartingHand } from '../../reducers/draw-valid-starting-hand'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { updateGame } from '../../reducers/update-game'
import { updateTable } from '../../reducers/update-table'
import {
  CropInstance,
  IField,
  IGame,
  IPlayedCrop,
  IPlayer,
  IPlayerSeed,
  ITable,
} from '../../types'
import { validate } from '../Validation'

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
      cardsPlayedDuringTurn: [],
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
      buffedCrop: null,
      nerfedCrop: null,
      cardsToDrawAtTurnStart: 0,
      eventCardsThatCanBePlayed: 0,
      toolCardsThatCanBePlayed: 0,
      winner: null,
      ...overrides,
      selectedWaterCardInHandIdx: overrides.selectedWaterCardInHandIdx ?? -1,
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
      validate.playerSeed(playerSeed)

      const player = this.buildPlayer({
        ...playerSeed,
        funds: Math.floor(game.table.communityFund / playerSeeds.length),
      })

      game = updateTable(game, {
        players: { ...game.table.players, [player.id]: player },
      })

      game = shuffleDeck(game, player.id)
      game = drawValidStartingHand(game, player.id)
    }

    game = updateTable(game, {
      communityFund: game.table.communityFund % playerSeeds.length,
    })

    game = updateGame(game, { currentPlayerId: game.sessionOwnerPlayerId })

    return game
  }

  buildPlayedCrop(cropInstance: CropInstance): IPlayedCrop {
    return {
      instance: cropInstance,
      wasWateredDuringTurn: false,
      waterCards: 0,
    }
  }
}

export const factory = new FactoryService()
