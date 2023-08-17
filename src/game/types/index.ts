import { uuidString } from '../../lib/types'

// NOTE: Most of the game's interface properties are readonly to enforce
// immutability.

export type GameReducer = (game: IGame) => Promise<IGame>

export enum CardType {
  CROP = 'CROP',
  EVENT = 'EVENT',
  TOOL = 'TOOL',
  WATER = 'WATER',
}

export interface ICard {
  readonly id: string
  readonly type: CardType
  readonly onPlayFromHand: (
    game: IGame,

    /**
     * The ID of the player playing the card
     */
    playerId: IPlayer['id'],

    /**
     * The index of the card within the player's hand
     */
    cardIdx: number
  ) => Promise<IGame>
}

export interface ICrop extends ICard {
  readonly type: CardType.CROP

  /**
   * How many water cards that need to be attached to this Crop card in order
   * to mature from from a seed to a sellable crop.
   */
  readonly waterCardsToMature: number
}

/**
 * A stateful representation of a Crop card that is in the Field.
 */
export interface IPlayedCrop extends ICrop {
  /**
   * How many water cards are attached to this card.
   */
  waterCards: number
}

/**
 * Players can play up to one Event card per turn. Has some sort of effect on
 * one or both players simultaneously, defined per card.
 */
export interface IEvent extends ICard {
  readonly type: CardType.EVENT
}

/**
 * Players can play an unlimited number of Tool cards per turn. Some tool cards
 * can be played from a player's hand during the opponent's turn (this would be
 * specified on the card). Has some sort of effect, defined per card.
 */
export interface ITool extends ICard {
  readonly type: CardType.TOOL
}

/**
 * Used to water Crop cards to mature them.
 */
export interface IWater extends ICard {
  readonly type: CardType.WATER
}

export interface IField {
  /**
   * Sparse array.
   */
  readonly crops: (ICrop | undefined)[]
}

export interface IPlayer {
  readonly id: uuidString

  /**
   * The number of coins this player has.
   */
  readonly funds: number

  /**
   * Cards that the player can draw from.
   */
  readonly deck: ICard['id'][]

  /**
   * Cards in the player's hand.
   */
  readonly hand: ICard['id'][]

  /**
   * Cards that have been used.
   */
  readonly discardPile: ICard['id'][]

  /**
   * Cards in the player's Field.
   */
  readonly field: IField
}

/**
 * This is meant to represent the minimal player data that is needed to boot an
 * IGame instance. The remainder of the properties of IPlayer can be computed.
 */
export type IPlayerSeed = Pick<IPlayer, 'id' | 'deck'>

export interface ITable {
  /**
   * Each players' card area at the table.
   */
  readonly players: Record<IPlayer['id'], IPlayer>

  /**
   * The number of coins in the community fund.
   */
  readonly communityFund: number
}

export interface IGame {
  readonly table: ITable
}
