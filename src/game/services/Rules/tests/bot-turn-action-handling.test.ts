import { randomNumber } from '../../../../services/RandomNumber'
import { MAX_RANDOM_VALUE } from '../../../../test-utils/constants'
import {
  stubCarrot,
  stubPumpkin,
  stubRain,
  stubShovel,
  stubSprinkler,
  stubWater,
} from '../../../../test-utils/stubs/cards'
import {
  carrot,
  instantiate,
  pumpkin,
  rain,
  shovel,
  sprinkler,
  water,
} from '../../../cards'
import { DECK_SIZE, STANDARD_FIELD_SIZE } from '../../../config'
import { updateField } from '../../../reducers/update-field'
import { updatePlayer } from '../../../reducers/update-player'
import {
  CardInstance,
  IField,
  IPlayedCrop,
  IPlayer,
  MatchEvent,
  MatchState,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import { isPlayedCrop } from '../../../types/guards'
import { botLogic } from '../../BotLogic'
import { factory } from '../../Factory'

import {
  carrot1,
  createSetUpMatchActor,
  expectCropInstance,
  expectEventInstance,
  expectToolInstance,
  expectWaterInstance,
  player1,
  player2,
  pumpkin1,
} from './helpers'

describe('bot turn action handling', () => {
  beforeEach(() => {
    vi.spyOn(botLogic, 'getOpenFieldPosition').mockImplementation(
      (match, playerId) => {
        const player = match.table.players[playerId]

        if (!player) {
          throw new Error(`Player with ID ${playerId} not found`)
        }

        const firstEmptyIdx = player.field.cards.findIndex(
          crop => typeof crop === 'undefined'
        )

        return firstEmptyIdx === -1 ? player.field.cards.length : firstEmptyIdx
      }
    )
  })

  describe('crop management', () => {
    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpMatchActor.
    test.each<{
      startingHand: IPlayer['hand']
      startingDeck: IPlayer['deck']
      resultingFieldCrops: IField['cards']
      resultingHand: IPlayer['hand']
      resultingDeck: IPlayer['deck']
      playedCards: CardInstance[]
    }>([
      {
        startingHand: [],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectWaterInstance(water)],
      },

      {
        startingHand: [],
        startingDeck: [
          carrot1,
          ...new Array<CardInstance>(DECK_SIZE - 2).fill(stubWater),
        ],
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
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
        playedCards: [expectCropInstance(carrot)],
      },

      {
        startingHand: [stubWater],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
        ],
        // NOTE: The water card from startingHand was played (as seen in
        // resultingFieldCrops). This is the water card pulled from the deck.
        resultingHand: [stubWater],

        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectWaterInstance(water)],
      },

      {
        startingHand: [pumpkin1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [expectWaterInstance(water), expectCropInstance(pumpkin)],
      },

      {
        startingHand: [pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredDuringTurn: false, waterCards: 0 },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [
          expectWaterInstance(water),
          expectCropInstance(pumpkin),
          expectCropInstance(carrot),
        ],
      },

      {
        startingHand: [stubWater, pumpkin1, carrot1],
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubWater),
        resultingFieldCrops: [
          {
            instance: expectCropInstance(carrot),
            wasWateredDuringTurn: true,
            waterCards: 1,
          },
          { instance: carrot1, wasWateredDuringTurn: true, waterCards: 1 },
          { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
        ],
        resultingHand: [],
        resultingDeck: new Array<CardInstance>(DECK_SIZE - 1).fill(stubWater),
        playedCards: [
          expectWaterInstance(water),
          expectWaterInstance(water),
          expectCropInstance(pumpkin),
          expectCropInstance(carrot),
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

        expect(player.field.cards).toEqual<IField['cards']>(resultingFieldCrops)
        expect(player.hand).toEqual(resultingHand)
        expect(player.deck).toEqual(resultingDeck)
        expect(cropsToPlayDuringTurn).toEqual(0)
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)

        const wereAnyCropsWatered = resultingFieldCrops.some(
          crop => isPlayedCrop(crop) && crop.wasWateredDuringTurn
        )

        const shellNotification: ShellNotification = {
          type: ShellNotificationType.CROP_WATERED,
          payload: {
            cropWatered: expectCropInstance(carrot),
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
      startingFieldCrops: IField['cards']
      startingDiscardPile: CardInstance[]
      resultingFieldCrops: IField['cards']
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
          expectWaterInstance(water),
        ] as CardInstance[],
        playedCards: [expectWaterInstance(water)],
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
          cards: startingFieldCrops,
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

        expect(player.field.cards).toEqual<IField['cards']>(resultingFieldCrops)
        expect(player.discardPile).toEqual<IPlayer['discardPile']>(
          resultingDiscardPile
        )
        expect(player.cardsPlayedDuringTurn).toEqual(playedCards)
      }
    )

    // NOTE: For this test case, there was already a carrot in the field as a
    // result of createSetUpMatchActor.
    test('prevents planting cards if field is full', () => {
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
        instance: expectCropInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      })
      const resultingHand: IPlayer['hand'] = [expectCropInstance(carrot)]
      const playedCards = new Array(STANDARD_FIELD_SIZE - 1)
        .fill(null)
        .map(() => expectCropInstance(carrot))

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

      expect(player.hand).toEqual([...startingHand, expectCropInstance(carrot)])

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
      expect(player.field.cards).toEqual<IField['cards']>(resultingFieldCrops)
      expect(cropsToPlayDuringTurn).toEqual(0)
      expect(player.cardsPlayedDuringTurn).toEqual(playedCards)

      const shellNotification: ShellNotification = {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: expectCropInstance(carrot),
        },
      }

      expect(shell.triggerNotification).not.toHaveBeenCalledWith<
        ShellNotification[]
      >(shellNotification)
    })

    // NOTE: For this test case, there was already a carrot in the field as a
    // result of createSetUpMatchActor.
    test('allows planting cards if field only has space in the middle', () => {
      // NOTE: When the turn starts, the player will draw a Carrot from the
      // deck.
      const startingHand: IPlayer['hand'] = []

      const startingDeck = new Array<CardInstance>(DECK_SIZE).fill(stubCarrot)

      // NOTE: Field is bookended by crops, but otherwise empty
      const startingFieldCrops: Array<IPlayedCrop | undefined> = [
        {
          instance: expectCropInstance(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        },
        ...new Array<undefined>(STANDARD_FIELD_SIZE - 2).fill(undefined),
        {
          instance: expectCropInstance(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        },
      ]

      const resultingFieldCrops: Array<IPlayedCrop | undefined> = [
        {
          instance: expectCropInstance(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        },
        {
          instance: expectCropInstance(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        },
        ...new Array<undefined>(STANDARD_FIELD_SIZE - 3).fill(undefined),
        {
          instance: expectCropInstance(carrot),
          wasWateredDuringTurn: false,
          waterCards: 0,
        },
      ]

      const resultingHand: IPlayer['hand'] = []
      const playedCards = [expectCropInstance(carrot)]
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
        field: {
          cards: startingFieldCrops,
        },
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
      expect(player.field.cards).toEqual<IField['cards']>(resultingFieldCrops)
      expect(cropsToPlayDuringTurn).toEqual(0)
      expect(player.cardsPlayedDuringTurn).toEqual(playedCards)
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
        playedCards: [expectEventInstance(rain)],
      },
      {
        numberOfEventCardsToPlay: 1,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubRain, stubRain],
        resultingHand: [stubRain, stubPumpkin],
        resultingDiscardPile: [stubRain],
        playedCards: [expectEventInstance(rain)],
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
      resultingDiscardPile: IPlayer['discardPile']
      playedCards: CardInstance[]
    }>([
      {
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubShovel],
        // NOTE: This does not include the pumpkin drawn from the deck because
        // it is set in the field due to `generate` being mocked as 1.
        resultingHand: [stubPumpkin, stubPumpkin],
        resultingDiscardPile: [stubShovel],
        playedCards: [expectToolInstance(shovel), expectCropInstance(pumpkin)],
      },
      {
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHand: [stubShovel, stubShovel],
        // NOTE: This does not include the pumpkin drawn from the deck because
        // it is set in the field due to `generate` being mocked as 1.
        resultingHand: [stubPumpkin, stubPumpkin, stubPumpkin, stubPumpkin],
        resultingDiscardPile: [stubShovel, stubShovel],
        playedCards: [
          expectToolInstance(shovel),
          expectToolInstance(shovel),
          expectCropInstance(pumpkin),
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

    test('skips playing plantable tool cards when field is full', () => {
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

      const startingDeck: IPlayer['deck'] = new Array<CardInstance>(
        DECK_SIZE
      ).fill(stubWater)
      const startingHand: IPlayer['hand'] = [stubSprinkler]
      const startingField: IPlayer['field'] = {
        cards: Array.from({ length: STANDARD_FIELD_SIZE }, () =>
          factory.buildPlayedTool(instantiate(sprinkler))
        ),
      }

      const resultingHand: IPlayer['hand'] = [stubSprinkler, stubWater]
      const resultingDiscardPile: IPlayer['discardPile'] = []
      const playedCards: CardInstance[] = []

      match = updatePlayer(match, player2.id, {
        deck: startingDeck,
        hand: startingHand,
        field: startingField,
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

      vi.runAllTimers()

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
          toolCard: stubSprinkler,
        },
      }

      expect(shell.triggerNotification).not.toHaveBeenCalledWith<
        ShellNotification[]
      >(shellNotification)
    })
  })
})
