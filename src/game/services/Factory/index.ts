import { v4 as uuid } from 'uuid'

import { INITIAL_PLAYER_FUNDS } from '../../config'
import { drawValidStartingHand } from '../../reducers/draw-valid-starting-hand'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { updateMatch } from '../../reducers/update-match'
import { updateTable } from '../../reducers/update-table'
import {
  CropInstance,
  IField,
  IMatch,
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
   * Constructs a minimally valid IMatch object.
   */
  buildMatch(overrides: Partial<IMatch> = {}, sessionOwnerPlayerId = uuid()) {
    const table = this.buildTable(overrides?.table)
    const { players } = table

    const [currentPlayerId = null] = Object.keys(players)

    let match: IMatch = {
      sessionOwnerPlayerId,
      table,
      currentPlayerId,
      buffedCrop: null,
      nerfedCrop: null,
      cardsToDrawAtTurnStart: 0,
      eventCardsThatCanBePlayed: 0,
      winner: null,
      ...overrides,
      selectedWaterCardInHandIdx: overrides.selectedWaterCardInHandIdx ?? -1,
    }

    if (Object.keys(players).length === 0) {
      match = updateTable(match, {
        players: {
          ...match.table.players,
          [sessionOwnerPlayerId]: this.buildPlayer({
            id: sessionOwnerPlayerId,
          }),
        },
      })
    }

    return match
  }

  /**
   * Constructs an IMatch object that is ready to be used by the rules
   * processing engine.
   */
  buildMatchForSession(
    playerSeeds: IPlayerSeed[],
    userPlayerId: string | undefined = playerSeeds[0]?.id
  ): IMatch {
    let match = this.buildMatch({}, userPlayerId)

    for (const playerSeed of playerSeeds) {
      validate.playerSeed(playerSeed)

      const player = this.buildPlayer({
        ...playerSeed,
        funds: Math.floor(match.table.communityFund / playerSeeds.length),
      })

      match = updateTable(match, {
        players: { ...match.table.players, [player.id]: player },
      })

      match = shuffleDeck(match, player.id)
      match = drawValidStartingHand(match, player.id)
    }

    match = updateTable(match, {
      communityFund: match.table.communityFund % playerSeeds.length,
    })

    match = updateMatch(match, { currentPlayerId: match.sessionOwnerPlayerId })

    return match
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
