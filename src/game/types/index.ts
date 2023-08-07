import { uuidString } from 'lib/types/index'
// NOTE: Most of the game's interface properties are readonly to enforce
// immutability.

export enum CardType {
  CROP = 'CROP',
  EVENT = 'EVENT',
  TOOL = 'TOOL',
  WATER = 'WATER',
}

export interface Card {
  readonly id: string
  readonly type: CardType
}

export interface Crop extends Card {
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
export interface PlayedCrop extends Crop {
  /**
   * How many water cards are attached to this card.
   */
  waterCards: number
}

/**
 * Players can play up to one Event card per turn. Has some sort of effect on
 * one or both players simultaneously, defined per card.
 */
export interface Event extends Card {
  readonly type: CardType.EVENT
}

/**
 * Players can play an unlimited number of Tool cards per turn. Some tool cards
 * can be played from a player's hand during the opponent's turn (this would be
 * specified on the card). Has some sort of effect, defined per card.
 */
export interface Tool extends Card {
  readonly type: CardType.TOOL
}

/**
 * Used to water Crop cards to mature them.
 */
export interface Water extends Card {
  readonly type: CardType.WATER
}

export interface Field {
  /**
   * Sparse array.
   */
  readonly crops: (Crop | undefined)[]
}

export interface Player {
  readonly id: uuidString

  /**
   * The number of coins this player has.
   */
  readonly funds: number

  /**
   * Cards that the player can draw from.
   */
  readonly deck: Card['id'][]

  /**
   * Cards in the player's hand.
   */
  readonly hand: Card['id'][]

  /**
   * Cards that have been used.
   */
  readonly discardPile: Card['id'][]

  /**
   * Cards in the player's Field.
   */
  readonly field: Field
}

export interface Table {
  /**
   * Each players' card area at the table.
   */
  readonly players: Record<Player['id'], Player>

  /**
   * The number of coins in the community fund.
   */
  readonly communityFund: number
}

export interface Game {
  readonly table: Table
}
