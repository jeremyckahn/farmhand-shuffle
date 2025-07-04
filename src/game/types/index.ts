import { uuidString } from '../../services/types'

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

  readonly name: string

  readonly type: CardType

  /**
   * @throws A custom error that describes why the card could not be played. If
   * this happens, the card must not be discarded from the player's hand.
   */
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
  ) => GameEventPayload[GameEventPayloadKey]
}

export interface Instance {
  instanceId: uuidString
}

export interface ICrop extends ICard {
  readonly type: CardType.CROP

  /**
   * How much water that needs to be attached to this Crop card in order to
   * mature from from a seed to a sellable crop.
   */
  readonly waterToMature: number
}

export interface CropInstance extends ICrop, Instance {}

export const isCropCardInstance = (
  cardInstance: CardInstance
): cardInstance is CropInstance => {
  return cardInstance.type === CardType.CROP
}

/**
 * A stateful representation of a Crop card that is in the Field.
 */
export interface IPlayedCrop {
  /**
   * The card instance of this crop.
   */
  instance: CropInstance

  /**
   * How many water cards are attached to this crop.
   */
  waterCards: number

  /**
   * Whether or not the crop has been watered during the current turn.
   */
  wasWateredDuringTurn: boolean
}

/**
 * Players can play up to one Event card per turn. Has some sort of effect on
 * one or both players simultaneously, defined per card.
 */
export interface IEvent extends ICard {
  readonly type: CardType.EVENT

  readonly description: string

  readonly applyEffect: (game: IGame) => IGame
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

export interface WaterInstance extends IWater, Instance {}

export interface EventInstance extends IEvent, Instance {}

export type CardInstance = CropInstance | WaterInstance | EventInstance

export const isWaterCardInstance = (
  cardInstance: CardInstance
): cardInstance is WaterInstance => {
  return cardInstance.type === CardType.WATER
}

export const isEventCardInstance = (
  cardInstance: CardInstance
): cardInstance is EventInstance => {
  return cardInstance.type === CardType.EVENT
}

export interface IField {
  readonly crops: (IPlayedCrop | undefined)[]
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
  readonly deck: CardInstance[]

  /**
   * Cards in the player's hand.
   */
  readonly hand: CardInstance[]

  /**
   * Cards that have been used.
   */
  readonly discardPile: CardInstance[]

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

export interface ICropPriceFluctuation {
  readonly crop: ICrop
  readonly multiplier: number
}

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
  /**
   * The IPlayer['id'] associated with the user who owns the current session.
   */
  readonly sessionOwnerPlayerId: IPlayer['id']

  readonly table: ITable

  /**
   * The IPlayer['id'] of the player whose turn it is.
   */
  readonly currentPlayerId: IPlayer['id'] | null

  /**
   * The crop that is currently selling for higher than normal.
   */
  readonly buffedCrop: ICropPriceFluctuation | null

  /**
   * The crop that is currently selling for lower than normal.
   */
  readonly nerfedCrop: ICropPriceFluctuation | null
}

export enum GameEvent {
  /**
   * Used to override the internal game context of the state machine. This
   * should only be used for test setup and debugging.
   */
  DANGEROUSLY_SET_CONTEXT = 'DANGEROUSLY_SET_CONTEXT',

  HARVEST_CROP = 'HARVEST_CROP',
  INIT = 'INIT',
  OPERATION_ABORTED = 'OPERATION_ABORTED',
  PLAY_CARD = 'PLAY_CARD',
  PLAY_CROP = 'PLAY_CROP',
  PLAY_EVENT = 'PLAY_EVENT',
  PLAY_WATER = 'PLAY_WATER',
  PLAYER_RAN_OUT_OF_FUNDS = 'PLAYER_RAN_OUT_OF_FUNDS',
  PROMPT_BOT_FOR_SETUP_ACTION = 'PROMPT_BOT_FOR_SETUP_ACTION',
  PROMPT_BOT_FOR_TURN_ACTION = 'PROMPT_BOT_FOR_TURN_ACTION',
  PROMPT_PLAYER_FOR_CROP_TO_WATER = 'PROMPT_PLAYER_FOR_CROP_TO_WATER',
  PROMPT_PLAYER_FOR_SETUP_ACTION = 'PROMPT_PLAYER_FOR_SETUP_ACTION',
  PROMPT_PLAYER_FOR_TURN_ACTION = 'PROMPT_PLAYER_FOR_TURN_ACTION',
  SELECT_CROP_TO_WATER = 'SELECT_CROP_TO_WATER',
  SET_SHELL = 'SET_SHELL',
  START_TURN = 'START_TURN',
}

interface PlayCardEventPayload<T = GameEvent.PLAY_CARD> {
  type: T
  playerId: IPlayer['id']
  /**
   * The index of the card in the hand being played
   */
  cardIdx: number
}

export enum GameState {
  UNINITIALIZED = 'UNINITIALIZED',

  GAME_OVER = 'GAME_OVER',
  PERFORMING_BOT_CROP_WATERING = 'PERFORMING_BOT_CROP_WATERING',
  PERFORMING_BOT_CROP_HARVESTING = 'PERFORMING_BOT_CROP_HARVESTING',
  PERFORMING_BOT_SETUP_ACTION = 'PERFORMING_BOT_SETUP_ACTION',
  PERFORMING_BOT_TURN_ACTION = 'PERFORMING_BOT_TURN_ACTION',
  PLANTING_CROP = 'PLANTING_CROP',
  PLAYER_WATERING_CROP = 'PLAYER_WATERING_CROP',
  PLAYING_CARD = 'PLAYING_CARD',
  PLAYING_EVENT = 'PLAYING_EVENT',
  WAITING_FOR_PLAYER_SETUP_ACTION = 'WAITING_FOR_PLAYER_SETUP_ACTION',
  WAITING_FOR_PLAYER_TURN_ACTION = 'WAITING_FOR_PLAYER_TURN_ACTION',
}

export enum GameStateGuard {
  HAVE_PLAYERS_COMPLETED_SETUP = 'HAVE_PLAYERS_COMPLETED_SETUP',
}

export enum ShellNotificationType {
  CROP_HARVESTED = 'CROP_HARVESTED',
  CROP_WATERED = 'CROP_WATERED',
  EVENT_CARD_PLAYED = 'EVENT_CARD_PLAYED',
}

export interface ShellNotificationPayload {
  [ShellNotificationType.CROP_HARVESTED]: {
    cropHarvested: ICrop
  }

  [ShellNotificationType.CROP_WATERED]: {
    cropWatered: ICrop
  }

  [ShellNotificationType.EVENT_CARD_PLAYED]: {
    eventCard: EventInstance
  }
}

/**
 * A union type that represents all possible shell notifications.
 * It's created by mapping over the `ShellNotificationType` enum
 * to create a distinct object type for each notification type,
 * including its specific payload.
 */
export type ShellNotification = {
  [K in ShellNotificationType]: {
    type: K
    payload: ShellNotificationPayload[K]
  }
}[ShellNotificationType]

export interface IShell {
  triggerNotification: (notfication: ShellNotification) => void
}

export interface GameEventPayload {
  [GameEvent.DANGEROUSLY_SET_CONTEXT]: {
    type: GameEvent.DANGEROUSLY_SET_CONTEXT
    game: IGame
  }

  [GameEvent.HARVEST_CROP]: {
    type: GameEvent.HARVEST_CROP
    playerId: IPlayer['id']
    cropIdxInFieldToHarvest: number
  }

  [GameEvent.INIT]: {
    type: GameEvent.INIT
    playerSeeds: IPlayerSeed[]
    userPlayerId: string
  }

  [GameEvent.START_TURN]: {
    type: GameEvent.START_TURN
  }

  [GameEvent.SET_SHELL]: {
    type: GameEvent.SET_SHELL
    shell: IShell
  }

  [GameEvent.PLAY_CROP]: PlayCardEventPayload<GameEvent.PLAY_CROP>

  [GameEvent.PLAY_EVENT]: PlayCardEventPayload<GameEvent.PLAY_EVENT>

  [GameEvent.PLAY_WATER]: PlayCardEventPayload<GameEvent.PLAY_WATER>

  [GameEvent.PLAYER_RAN_OUT_OF_FUNDS]: {
    type: GameEvent.PLAYER_RAN_OUT_OF_FUNDS
    playerId: IPlayer['id']
  }

  [GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]: {
    type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION
  }

  [GameEvent.PROMPT_BOT_FOR_SETUP_ACTION]: {
    type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION
  }

  [GameEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER]: {
    type: GameEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER
    playerId: IPlayer['id']
    waterCardInHandIdx: number
  }

  [GameEvent.SELECT_CROP_TO_WATER]: {
    type: GameEvent.SELECT_CROP_TO_WATER
    playerId: IPlayer['id']
    waterCardInHandIdx: number
    cropIdxInFieldToWater: number
  }

  [GameEvent.OPERATION_ABORTED]: {
    type: GameEvent.OPERATION_ABORTED
  }

  [GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION]: {
    type: GameEvent.PROMPT_PLAYER_FOR_TURN_ACTION
  }

  [GameEvent.PROMPT_BOT_FOR_TURN_ACTION]: {
    type: GameEvent.PROMPT_BOT_FOR_TURN_ACTION
  }
}

export type GameEventPayloadKey = keyof GameEventPayload
