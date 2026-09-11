import { allCards } from '../../game/cards'
import { GameStateCorruptError } from '../../game/services/Rules/errors'
import {
  CardInstance,
  IMatch,
  IPlayedCard,
  IPlayer,
  ITable,
} from '../../game/types'

export interface SerializedCardInstance {
  id: string
  instanceId: string
}

export type SerializedPlayedCard = Omit<IPlayedCard, 'instance'> & {
  instance: SerializedCardInstance
}

export interface SerializedPlayer
  extends Omit<
    IPlayer,
    'deck' | 'hand' | 'discardPile' | 'field' | 'cardsPlayedDuringTurn'
  > {
  deck: SerializedCardInstance[]
  hand: SerializedCardInstance[]
  discardPile: SerializedCardInstance[]
  cardsPlayedDuringTurn: SerializedCardInstance[]
  field: {
    cards: (SerializedPlayedCard | undefined)[]
  }
}

export interface SerializedMatch extends Omit<IMatch, 'table'> {
  table: Omit<ITable, 'players'> & {
    players: Record<IPlayer['id'], SerializedPlayer>
  }
}

/**
 * Serializes a CardInstance down to its plain, JSON-safe identity.
 * CardInstances built by `instantiate()` (src/game/cards/index.ts) carry
 * function properties for IEvent/ITool cards (applyEffect,
 * onStartFollowingTurn, applyDailyEffect) that a naive JSON.stringify would
 * silently drop, stripping card behavior on the next deserialization.
 * @param instance - The card instance to serialize.
 * @returns A plain object identifying the card and its instance.
 */
export const serializeCardInstance = (
  instance: CardInstance
): SerializedCardInstance => ({
  id: instance.id,
  instanceId: instance.instanceId,
})

/**
 * Deserializes a SerializedCardInstance back into a full CardInstance by
 * looking up the card's static definition and reattaching the **existing**
 * instanceId. This intentionally does not call `instantiate()`, which would
 * mint a new instanceId and break instance references elsewhere in match
 * state (e.g. a field card pointing at a hand card that no longer matches).
 * @param data - The serialized card instance data.
 * @returns The reconstituted CardInstance.
 * @throws {GameStateCorruptError} If the card ID is not found.
 */
export const deserializeCardInstance = (
  data: SerializedCardInstance
): CardInstance => {
  const card = allCards[data.id]

  if (!card) {
    throw new GameStateCorruptError(
      `Card with ID "${data.id}" not found in card definitions.`
    )
  }

  return { ...card, instanceId: data.instanceId } as CardInstance
}

const serializePlayedCard = (
  playedCard: IPlayedCard | undefined
): SerializedPlayedCard | undefined => {
  if (!playedCard) {
    return undefined
  }

  return {
    ...playedCard,
    instance: serializeCardInstance(playedCard.instance),
  }
}

const deserializePlayedCard = (
  playedCard: SerializedPlayedCard | undefined
): IPlayedCard | undefined => {
  if (!playedCard) {
    return undefined
  }

  return {
    ...playedCard,
    instance: deserializeCardInstance(playedCard.instance),
  } as IPlayedCard
}

const serializePlayer = (player: IPlayer): SerializedPlayer => ({
  ...player,
  deck: player.deck.map(serializeCardInstance),
  hand: player.hand.map(serializeCardInstance),
  discardPile: player.discardPile.map(serializeCardInstance),
  cardsPlayedDuringTurn: player.cardsPlayedDuringTurn.map(
    serializeCardInstance
  ),
  field: {
    cards: player.field.cards.map(serializePlayedCard),
  },
})

const deserializePlayer = (player: SerializedPlayer): IPlayer => ({
  ...player,
  deck: player.deck.map(deserializeCardInstance),
  hand: player.hand.map(deserializeCardInstance),
  discardPile: player.discardPile.map(deserializeCardInstance),
  cardsPlayedDuringTurn: player.cardsPlayedDuringTurn.map(
    deserializeCardInstance
  ),
  field: {
    cards: player.field.cards.map(deserializePlayedCard),
  },
})

/**
 * Serializes an IMatch into a plain, JSON-safe structure suitable for
 * persistence, deep-transforming every CardInstance found in each player's
 * deck/hand/discardPile/cardsPlayedDuringTurn and field.cards[*].instance.
 * Everything else on IMatch is already plain data and passes through
 * unchanged.
 * @param match - The match to serialize.
 * @returns A plain object suitable for JSON storage.
 */
export const serializeMatch = (match: IMatch): SerializedMatch => ({
  ...match,
  table: {
    ...match.table,
    players: Object.fromEntries(
      Object.entries(match.table.players).map(([playerId, player]) => [
        playerId,
        serializePlayer(player),
      ])
    ),
  },
})

/**
 * Deserializes a SerializedMatch back into a full IMatch, reconstituting
 * every CardInstance found in each player's
 * deck/hand/discardPile/cardsPlayedDuringTurn and field.cards[*].instance.
 * @param data - The serialized match data.
 * @returns The reconstituted IMatch.
 * @throws {GameStateCorruptError} If a card ID is not found.
 */
export const deserializeMatch = (data: SerializedMatch): IMatch => ({
  ...data,
  table: {
    ...data.table,
    players: Object.fromEntries(
      Object.entries(data.table.players).map(([playerId, player]) => [
        playerId,
        deserializePlayer(player),
      ])
    ),
  },
})
