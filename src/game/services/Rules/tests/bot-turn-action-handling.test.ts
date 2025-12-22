import { botLogic } from '../../BotLogic'
import {
  CardInstance,
  MatchEvent,
  MatchState,
  IField,
  IPlayedCrop,
  IPlayer,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import {
  carrot,
  instantiate,
  pumpkin,
  rain,
  shovel,
  water,
} from '../../../cards'
import { DECK_SIZE, STANDARD_FIELD_SIZE } from '../../../config'
import { randomNumber } from '../../../../services/RandomNumber'
import { MAX_RANDOM_VALUE } from '../../../../test-utils/constants'
import {
  stubCarrot,
  stubPumpkin,
  stubRain,
  stubShovel,
  stubWater,
} from '../../../../test-utils/stubs/cards'
import { updateField } from '../../../reducers/update-field'
import { updatePlayer } from '../../../reducers/update-player'

import {
  createSetUpMatchActor,
  expectInstance,
  player1,
  player2,
  carrot1,
  pumpkin1,
} from './helpers'

describe('bot turn action handling', () => {
  describe('crop management', () => {
    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpMatchActor.
    test.each<{
      startingHand: IPlayer['hand']
      startingDeck: IPlayer['deck']
      resultingFieldCrops: IField['crops']
      resultingHand: IPlayer['hand']
      resultingDeck: IPlayer['deck']
      playedCards: CardInstance[]
    }>([
      {
        startingHand: [],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectInstance(water)],
      },

      {
        startingHand: [],
        startingDeck: [
          carrot1,
          ...new Array<CardInstance>(DECK_SIZE - 2).fill(stubWater),
        ],
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: false,
            waterCards: 0,
          },
          {
            instance: carrot1,
            wasWateredDuringTurn: false,
            waterCards: 0,
          },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 2).fill(stubWater),
        playedCards: [expectInstance(carrot)],
      },

      {
        startingHand: [stubWater],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
        // NOTE: The water card from startingHand was played (as seen in
        // resultingFieldCrops). This is the water card pulled from the deck.
        resultingHand: [stubWater],

        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectInstance(water)],
      },

      {
        startingHand: [pumpkin1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectInstance(water), expectInstance(pumpkin)],
      },

      {
        startingHand: [pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredDuringTurn: false, waterCards: 0 },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [
          expectInstance(water),
          expectInstance(pumpkin),
          expectInstance(carrot),
        ],
      },

      {
        startingHand: [stubWater, pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredDuringTurn: true, waterCards: 1 },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [
          expectInstance(water),
          expectInstance(water),
          expectInstance(pumpkin),
          expectInstance(carrot),
        ],
      },
    ])(
      'plants and waters crops from starting hand $startingHand',
      ({
        startingHand,
        startingDeck,
        resultingFieldCrops,
        resultingHand,
        resultingDeck,
        playedCards,
      }) => {
        const matchActor = createSetUpMatchActor()

        const snapshot = matchActor.getSnapshot()
        let {
          context: { match },
        } = snapshot
        const {
          context: { shell },
        } = snapshot

        vi.spyOn(shell, 'triggerNotification')

        // NOTE: This causes the maximum amount of crops in the hand to be
        // played. It plays from the back of the hand to the front.
        vi.spyOn(randomNumber, 'generate').mockReturnValue(MAX_RANDOM_VALUE)

        match = updatePlayer(match, player2.id, {
          deck: startingDeck,
          hand: startingHand,
        })
        matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

        // NOTE: Prompts bot player
        matchActor.send({ type: MatchEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: {
            match: matchResult,
            botState: { cropsToPlayDuringTurn },
          },
        } = matchActor.getSnapshot()

        expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(matchResult.currentPlayerId).toBe(player1.id)

        const player = matchResult.table.players[player2.id]

        if (!player) {
          throw new Error('Player not found')
        }

        expect(player.field.crops).toEqual<IField['crops']>(resultingFieldCrops)
        expect(player.hand).toEqual(resultingHand)
        expect(player.deck).toEqual(resultingDeck)
        expect(cropsToPlayDuringTurn).toEqual(0)
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)

        const wereAnyCropsWatered = resultingFieldCrops.some(
          crop => crop && crop.wasWateredDuringTurn
        )

        const shellNotification: ShellNotification = {
          type: ShellNotificationType.CROP_WATERED,
          payload: {
            cropWatered: expectInstance(carrot),
          },
        }

        if (wereAnyCropsWatered) {
          expect(shell.triggerNotification).toHaveBeenCalledWith<
            ShellNotification[]
          >(shellNotification)
        } else {
          expect(shell.triggerNotification).not.toHaveBeenCalledWith<
            ShellNotification[]
          >(shellNotification)
        }
      }
    )

    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpMatchActor.
    test.each<{
      startingFieldCrops: IField['crops']
      startingDiscardPile: CardInstance[]
      resultingFieldCrops: IField['crops']
      resultingDiscardPile: CardInstance[]
      playedCards: CardInstance[]
    }>([
      {
        startingDiscardPile: [],
        startingFieldCrops: [],
        resultingFieldCrops: [],
        resultingDiscardPile: [],
        playedCards: [],
      },

      {
        startingDiscardPile: [],
        startingFieldCrops: [
          {
            instance: stubCarrot,
            wasWateredDuringTurn: true,
            waterCards: carrot.waterToMature,
          },
        ],
        resultingFieldCrops: [undefined],
        resultingDiscardPile: [stubCarrot],
        playedCards: [],
      },

      {
        startingDiscardPile: [],
        startingFieldCrops: [
          {
            instance: stubPumpkin,
            wasWateredDuringTurn: true,
            waterCards: pumpkin.waterToMature,
          },
          {
            instance: stubCarrot,
            wasWateredDuringTurn: true,
            waterCards: 0,
          },
        ],
        resultingFieldCrops: [
          undefined,
          // NOTE: This is the previously unwatered, unharvestable crop
          {
            instance: stubCarrot,
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
        resultingDiscardPile: [
          stubPumpkin,
          expectInstance(water),
        ] as CardInstance[],
        playedCards: [expectInstance(water)],
      },
    ])(
      'harvests crops from starting field $startingFieldCrops',
      ({
        startingFieldCrops,
        startingDiscardPile,
        resultingFieldCrops,
        resultingDiscardPile,
        playedCards,
      }) => {
        const matchActor = createSetUpMatchActor()

        let {
          context: { match },
        } = matchActor.getSnapshot()

        match = updateField(match, player2.id, {
          crops: startingFieldCrops,
        })

        match = updatePlayer(match, player2.id, {
          discardPile: startingDiscardPile,
        })

        matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

        // NOTE: Prompts bot player
        matchActor.send({ type: MatchEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { match: matchResult },
        } = matchActor.getSnapshot()

        expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(matchResult.currentPlayerId).toBe(player1.id)

        const player = matchResult.table.players[player2.id]

        if (!player) {
          throw new Error('Player not found')
        }

        expect(player.field.crops).toEqual<IField['crops']>(resultingFieldCrops)
        expect(player.discardPile).toEqual<IPlayer['discardPile']>(
          resultingDiscardPile
        )
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)
      }
    )

    // NOTE: For this test case, there was already a carrot in the field as a
    // result of createSetUpMatchActor.
    test('prevents planting crops if field is full', () => {
      // NOTE: When the turn starts, the player will draw an additional Carrot
      // from the deck. This would result in a hand that is the max size of the
      // field. With one Carrot already in the field, there would be only one
      // carrot left in the hand.
      const startingHand: IPlayer['hand'] = new Array(STANDARD_FIELD_SIZE - 1)
        .fill(null)
        .map(() => instantiate(carrot))

      const startingDeck = new Array<CardInstance>(DECK_SIZE).fill(stubCarrot)
      const resultingFieldCrops = new Array<IPlayedCrop>(
        STANDARD_FIELD_SIZE
      ).fill({
        instance: expectInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      })
      const resultingHand: IPlayer['hand'] = [expectInstance(carrot)]
      const playedCards = new Array(STANDARD_FIELD_SIZE - 1)
        .fill(null)
        .map(() => expectInstance(carrot))

      const matchActor = createSetUpMatchActor()

      const snapshot = matchActor.getSnapshot()
      let {
        context: { match },
      } = snapshot
      const {
        context: { shell },
      } = snapshot

      vi.spyOn(shell, 'triggerNotification')

      // NOTE: This causes the maximum amount of crops in the hand to be
      // played. It plays from the back of the hand to the front.
      vi.spyOn(randomNumber, 'generate').mockReturnValue(MAX_RANDOM_VALUE)

      match = updatePlayer(match, player2.id, {
        deck: startingDeck,
        hand: startingHand,
      })
      matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

      // NOTE: Prompts bot player
      matchActor.send({ type: MatchEvent.START_TURN })

      // NOTE: Indicates that another Carrot was drawn
      let player =
        matchActor.getSnapshot().context.match.table.players[player2.id]

      if (!player) {
        throw new Error('Player not found')
      }

      expect(player.hand).toEqual([...startingHand, expectInstance(carrot)])

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      const {
        value,
        context: {
          match: matchResult,
          botState: { cropsToPlayDuringTurn },
        },
      } = matchActor.getSnapshot()

      expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(matchResult.currentPlayerId).toBe(player1.id)

      player = matchResult.table.players[player2.id]

      if (!player) {
        throw new Error('Player not found')
      }

      expect(player.hand).toEqual(resultingHand)
      expect(player.field.crops).toEqual<IField['crops']>(resultingFieldCrops)
      expect(cropsToPlayDuringTurn).toEqual(0)
      expect(player.cardsPlayedDuringTurn).toEqual(playedCards)

      const shellNotification: ShellNotification = {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: expectInstance(carrot),
        },
      }

      expect(shell.triggerNotification).not.toHaveBeenCalledWith<
        ShellNotification[]
      >(shellNotification)
    })
  })

  describe('events', () => {
    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpMatchActor.
    test.each<{
      numberOfEventCardsToPlay: number
      startingDeck: IPlayer['deck']
      startingHand: IPlayer['hand']
      resultingHand: IPlayer['hand']
      resultingDiscardPile: CardInstance[]
      playedCards: CardInstance[]
    }>([
      {
        numberOfEventCardsToPlay: 0,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubRain],
        resultingHand: [stubRain, stubPumpkin],
        resultingDiscardPile: [],
        playedCards: [],
      },
      {
        numberOfEventCardsToPlay: 1,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubRain],
        resultingHand: [stubPumpkin],
        resultingDiscardPile: [stubRain],
        playedCards: [expectInstance(rain)],
      },
      {
        numberOfEventCardsToPlay: 1,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubRain, stubRain],
        resultingHand: [stubRain, stubPumpkin],
        resultingDiscardPile: [stubRain],
        playedCards: [expectInstance(rain)],
      },
    ])(
      'plays $numberOfEventCardsToPlay event cards from hand with $startingHandEvents.length of them',
      ({
        numberOfEventCardsToPlay,
        startingDeck,
        startingHand,
        resultingHand,
        resultingDiscardPile,
        playedCards,
      }) => {
        const matchActor = createSetUpMatchActor()

        const snapshot = matchActor.getSnapshot()
        let {
          context: { match },
        } = snapshot
        const {
          context: { shell },
        } = snapshot

        vi.spyOn(shell, 'triggerNotification')

        match = updatePlayer(match, player2.id, {
          deck: startingDeck,
          hand: startingHand,
        })

        matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

        vi.spyOn(botLogic, 'getNumberOfEventCardsToPlay').mockReturnValueOnce(
          numberOfEventCardsToPlay
        )

        // NOTE: Prompts bot player
        matchActor.send({ type: MatchEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { match: matchResult },
        } = matchActor.getSnapshot()

        expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(matchResult.currentPlayerId).toBe(player1.id)

        const player = matchResult.table.players[player2.id]

        if (!player) {
          throw new Error('Player not found')
        }

        expect(player.hand).toEqual<IPlayer['hand']>(resultingHand)

        expect(player.discardPile).toEqual<IPlayer['discardPile']>(
          resultingDiscardPile
        )

        const shellNotification: ShellNotification = {
          type: ShellNotificationType.EVENT_CARD_PLAYED,
          payload: {
            eventCard: stubRain,
          },
        }

        if (numberOfEventCardsToPlay > 0) {
          expect(shell.triggerNotification).toHaveBeenCalledWith<
            ShellNotification[]
          >(shellNotification)
        } else {
          expect(shell.triggerNotification).not.toHaveBeenCalledWith<
            ShellNotification[]
          >(shellNotification)
        }
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)
      }
    )
  })

  describe('tools', () => {
    test.each<{
      startingDeck: IPlayer['deck']
      startingHand: IPlayer['hand']
      resultingHand: IPlayer['hand']
      resultingDiscardPile: CardInstance[]
      playedCards: CardInstance[]
    }>([
      {
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubShovel],
        // NOTE: This does not include the pumpkin drawn from the deck because
        // it is set in the field due to `generate` being mocked as 1.
        resultingHand: [stubPumpkin, stubPumpkin],
        resultingDiscardPile: [stubShovel],
        playedCards: [expectInstance(shovel), expectInstance(pumpkin)],
      },
      {
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubShovel, stubShovel],
        // NOTE: This does not include the pumpkin drawn from the deck because
        // it is set in the field due to `generate` being mocked as 1.
        resultingHand: [stubPumpkin, stubPumpkin, stubPumpkin, stubPumpkin],
        resultingDiscardPile: [stubShovel, stubShovel],
        playedCards: [
          expectInstance(shovel),
          expectInstance(shovel),
          expectInstance(pumpkin),
        ],
      },
    ])(
      'plays tool cards from hand',
      ({
        startingDeck,
        startingHand,
        resultingHand,
        resultingDiscardPile,
        playedCards,
      }) => {
        // NOTE: This causes the maximum amount of tools in the hand to be
        // played.
        vi.spyOn(randomNumber, 'generate').mockReturnValue(MAX_RANDOM_VALUE)

        const matchActor = createSetUpMatchActor()

        const snapshot = matchActor.getSnapshot()
        let {
          context: { match },
        } = snapshot
        const {
          context: { shell },
        } = snapshot

        vi.spyOn(shell, 'triggerNotification')

        match = updatePlayer(match, player2.id, {
          deck: startingDeck,
          hand: startingHand,
        })

        matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

        // NOTE: Prompts bot player
        matchActor.send({ type: MatchEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { match: matchResult },
        } = matchActor.getSnapshot()

        expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(matchResult.currentPlayerId).toBe(player1.id)

        const player = matchResult.table.players[player2.id]

        if (!player) {
          throw new Error('Player not found')
        }

        expect(player.hand).toEqual<IPlayer['hand']>(resultingHand)
        expect(player.discardPile).toEqual<IPlayer['discardPile']>(
          resultingDiscardPile
        )
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)

        const shellNotification: ShellNotification = {
          type: ShellNotificationType.TOOL_CARD_PLAYED,
          payload: {
            toolCard: stubShovel,
          },
        }

        expect(shell.triggerNotification).toHaveBeenCalledWith<
          ShellNotification[]
        >(shellNotification)
      }
    )
  })
})
