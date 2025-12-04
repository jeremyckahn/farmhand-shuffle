import { uuidString } from '../../services/types'

// NOTE: Most of the match's interface properties are readonly to enforce
// immutability.

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
}

export interface Instance {
  instanceId: uuidString
}

export interface ICrop extends ICard {
  readonly type: CardType.CROP

  /**
   * How much water that needs to be attached to this Crop card in order to
   * mature from a seed to a sellable crop.
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

export interface MatchMachineContext {
  match: IMatch
  shell: IShell
  botState: BotState
}

interface IEffect extends ICard {
  readonly description: string

  readonly applyEffect: (context: MatchMachineContext) => MatchMachineContext

  readonly onStartFollowingTurn?: (
    context: MatchMachineContext
  ) => MatchMachineContext
}

/**
 * Players can play up to one Event card per turn. Has some sort of effect on
 * one or both players simultaneously, defined per card.
 */
export interface IEvent extends IEffect {
  readonly type: CardType.EVENT
}

/**
 * Players can play as many tool cards per turn as they wish. Has some sort of
 * effect on one or both players simultaneously, defined per card.
 */
export interface ITool extends IEffect {
  readonly type: CardType.TOOL
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

export interface ToolInstance extends ITool, Instance {}

export type CardInstance =
  | CropInstance
  | WaterInstance
  | EventInstance
  | ToolInstance

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

export const isToolCardInstance = (
  cardInstance: CardInstance
): cardInstance is ToolInstance => {
  return cardInstance.type === CardType.TOOL
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

  /**
   * The cards played during the current turn. This array is emptied at the
   * start of the player's turn.
   */
  readonly cardsPlayedDuringTurn: CardInstance[]
}

/**
 * This is meant to represent the minimal player data that is needed to boot an
 * IMatch instance. The remainder of the properties of IPlayer can be computed.
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

export interface IMatch {
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

  /**
   * How many cards the current player should draw when their turn starts.
   */
  readonly cardsToDrawAtTurnStart: number

  /**
   * The amount of event cards the current player can play during the current
   * turn. This typically is set to 1 at the beginning of every turn.
   */
  readonly eventCardsThatCanBePlayed: number

  /**
   * The index in the hand of the selected water card for the current player. A
   * value of -1 means no water cards are selected.
   */
  readonly selectedWaterCardInHandIdx: number

  /**
   * The winner of the current match, if any.
   */
  readonly winner: IPlayer['id'] | null
}

export enum MatchEvent {
  /**
   * Used to override the internal context of the state machine. This should
   * only be used for test setup and debugging.
   */
  DANGEROUSLY_SET_CONTEXT = 'DANGEROUSLY_SET_CONTEXT',

  HARVEST_CROP = 'HARVEST_CROP',
  INIT = 'INIT',
  OPERATION_ABORTED = 'OPERATION_ABORTED',
  PLAY_CARD = 'PLAY_CARD',
  PLAY_CROP = 'PLAY_CROP',
  PLAY_EVENT = 'PLAY_EVENT',
  PLAY_TOOL = 'PLAY_TOOL', // Spiral out
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
  BOT_TURN_INITIALIZED = 'BOT_TURN_INITIALIZED',
  BOT_TURN_PHASE_COMPLETE = 'BOT_TURN_PHASE_COMPLETE',
}

export enum BotTurnActionState {
  INITIALIZING = 'INITIALIZING',
  HARVESTING_CROPS = 'HARVESTING_CROPS',
  PLAYING_CROPS = 'PLAYING_CROPS',
  PLAYING_EVENTS = 'PLAYING_EVENTS',
  PLAYING_TOOLS = 'PLAYING_TOOLS',
  PLAYING_WATER = 'PLAYING_WATER',
  DONE = 'DONE',
}

interface PlayCardEventPayload<T = MatchEvent.PLAY_CARD> {
  type: T
  playerId: IPlayer['id']
  /**
   * The index of the card in the hand being played
   */
  cardIdx: number
}

export enum MatchState {
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
  PLAYING_TOOL = 'PLAYING_TOOL',
  WAITING_FOR_PLAYER_SETUP_ACTION = 'WAITING_FOR_PLAYER_SETUP_ACTION',
  WAITING_FOR_PLAYER_TURN_ACTION = 'WAITING_FOR_PLAYER_TURN_ACTION',
}

export enum MatchStateGuard {
  HAVE_PLAYERS_COMPLETED_SETUP = 'HAVE_PLAYERS_COMPLETED_SETUP',
  IS_SELECTED_IDX_VALID = 'IS_SELECTED_IDX_VALID',
}

export enum ShellNotificationType {
  CARDS_DRAWN = 'CARDS_DRAWN',
  CROP_HARVESTED = 'CROP_HARVESTED',
  CROP_WATERED = 'CROP_WATERED',
  EVENT_CARD_PLAYED = 'EVENT_CARD_PLAYED',
  TOOL_CARD_PLAYED = 'TOOL_CARD_PLAYED',
}

export interface ShellNotificationPayload {
  [ShellNotificationType.CARDS_DRAWN]: {
    howMany: number
    playerId: IPlayer['id']
  }

  [ShellNotificationType.CROP_HARVESTED]: {
    cropHarvested: ICrop
  }

  [ShellNotificationType.CROP_WATERED]: {
    cropWatered: ICrop
  }

  [ShellNotificationType.EVENT_CARD_PLAYED]: {
    eventCard: EventInstance
  }

  [ShellNotificationType.TOOL_CARD_PLAYED]: {
    toolCard: ToolInstance
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

export interface MatchEventPayload {
  [MatchEvent.DANGEROUSLY_SET_CONTEXT]: Partial<MatchMachineContext> & {
    type: MatchEvent.DANGEROUSLY_SET_CONTEXT
  }

  [MatchEvent.HARVEST_CROP]: {
    type: MatchEvent.HARVEST_CROP
    playerId: IPlayer['id']
    cropIdxInFieldToHarvest: number
  }

  [MatchEvent.INIT]: {
    type: MatchEvent.INIT
    playerSeeds: IPlayerSeed[]
    userPlayerId: string
  }

  [MatchEvent.START_TURN]: {
    type: MatchEvent.START_TURN
  }

  [MatchEvent.SET_SHELL]: {
    type: MatchEvent.SET_SHELL
    shell: IShell
  }

  [MatchEvent.PLAY_CROP]: PlayCardEventPayload<MatchEvent.PLAY_CROP>

  [MatchEvent.PLAY_EVENT]: PlayCardEventPayload<MatchEvent.PLAY_EVENT>

  [MatchEvent.PLAY_TOOL]: PlayCardEventPayload<MatchEvent.PLAY_TOOL>

  [MatchEvent.PLAY_WATER]: PlayCardEventPayload<MatchEvent.PLAY_WATER>

  [MatchEvent.PLAYER_RAN_OUT_OF_FUNDS]: {
    type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS
    playerId: IPlayer['id']
  }

  [MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION]: {
    type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION
  }

  [MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION]: {
    type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION
  }

  [MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER]: {
    type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER
    playerId: IPlayer['id']
    waterCardInHandIdx: number
  }

  [MatchEvent.SELECT_CROP_TO_WATER]: {
    type: MatchEvent.SELECT_CROP_TO_WATER
    playerId: IPlayer['id']
    waterCardInHandIdx: number
    cropIdxInFieldToWater: number
  }

  [MatchEvent.OPERATION_ABORTED]: {
    type: MatchEvent.OPERATION_ABORTED
  }

  [MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION]: {
    type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION
  }

  [MatchEvent.PROMPT_BOT_FOR_TURN_ACTION]: {
    type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION
  }

  [MatchEvent.BOT_TURN_INITIALIZED]: {
    type: MatchEvent.BOT_TURN_INITIALIZED
  }

  [MatchEvent.BOT_TURN_PHASE_COMPLETE]: {
    type: MatchEvent.BOT_TURN_PHASE_COMPLETE
  }
}

export type MatchEventPayloadKey = keyof MatchEventPayload

export type MatchEvents = MatchEventPayload[MatchEventPayloadKey]

export interface BotState {
  cropCardIndicesToHarvest: number[]
  cropsToPlayDuringTurn: number
  fieldCropIndicesToWaterDuringTurn: number[]
  toolCardsThatCanBePlayed: number
}
