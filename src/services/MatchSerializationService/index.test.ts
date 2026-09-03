import { instantiate, rain, sprinkler } from '../../game/cards'
import { updatePlayer } from '../../game/reducers/update-player'
import { factory } from '../../game/services/Factory'
import { CardType, IPlayedCard } from '../../game/types'
import { stubPlayer1, stubPlayer2 } from '../../test-utils/stubs/players'

import {
  deserializeCardInstance,
  deserializeMatch,
  serializeCardInstance,
  serializeMatch,
} from '.'

describe('MatchSerializationService', () => {
  describe('serializeCardInstance / deserializeCardInstance', () => {
    test('round-trips a card instance, preserving id, instanceId, and behavior', () => {
      const instance = instantiate(rain)

      const serialized = serializeCardInstance(instance)

      expect(serialized).toEqual({
        id: instance.id,
        instanceId: instance.instanceId,
      })

      const deserialized = deserializeCardInstance(serialized)

      expect(deserialized.instanceId).toBe(instance.instanceId)
      expect(deserialized.id).toBe(instance.id)
      expect(typeof deserialized).toBe('object')

      if (deserialized.type === CardType.EVENT) {
        expect(typeof deserialized.applyEffect).toBe('function')
      } else {
        throw new Error('Expected deserialized instance to be an EVENT card')
      }
    })

    test('throws GameStateCorruptError for an unknown card id', () => {
      expect(() =>
        deserializeCardInstance({ id: 'not-a-real-card', instanceId: 'abc' })
      ).toThrow(/not found in card definitions/)
    })
  })

  describe('serializeMatch / deserializeMatch', () => {
    test('round-trips a full match, preserving function properties and instanceIds', () => {
      const match = factory.buildMatchForSession(
        [stubPlayer1, stubPlayer2],
        stubPlayer1.id
      )

      const rainInstance = instantiate(rain)
      const sprinklerInstance = instantiate(sprinkler)

      const playedTool: IPlayedCard = {
        instance: sprinklerInstance,
      }

      const matchWithFieldState = updatePlayer(match, stubPlayer1.id, {
        hand: [rainInstance],
        field: {
          cards: [playedTool, undefined],
        },
      })

      const serialized = serializeMatch(matchWithFieldState)

      // NOTE: Verifies the round trip survives an actual JSON transport, not
      // just an in-memory deep-clone.
      const serializedThroughJson = JSON.parse(
        JSON.stringify(serialized)
      ) as typeof serialized

      const deserialized = deserializeMatch(serializedThroughJson)

      const player1 = deserialized.table.players[stubPlayer1.id]

      expect(player1).toBeDefined()
      expect(player1?.hand[0]?.instanceId).toBe(rainInstance.instanceId)
      expect(player1?.hand[0]?.id).toBe(rainInstance.id)
      expect(typeof (player1?.hand[0] as typeof rainInstance).applyEffect).toBe(
        'function'
      )

      const deserializedPlayedTool = player1?.field.cards[0]

      expect(deserializedPlayedTool).toBeDefined()
      expect(deserializedPlayedTool?.instance.instanceId).toBe(
        sprinklerInstance.instanceId
      )
      expect(
        typeof (deserializedPlayedTool?.instance as typeof sprinklerInstance)
          .applyDailyEffect
      ).toBe('function')

      expect(deserialized.turn).toBe(matchWithFieldState.turn)
      expect(deserialized.sessionOwnerPlayerId).toBe(
        matchWithFieldState.sessionOwnerPlayerId
      )
    })
  })
})
