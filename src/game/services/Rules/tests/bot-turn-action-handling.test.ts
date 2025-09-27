import { botLogic } from '../../BotLogic'
import {
  CardInstance,
  CropInstance,
  GameEvent,
  GameState,
  IField,
  IPlayer,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import { carrot, pumpkin } from '../../../cards'
import { DECK_SIZE } from '../../../config'
import { randomNumber } from '../../../../services/RandomNumber'
import {
  stubCarrot,
  stubPumpkin,
  stubRain,
  stubWater,
} from '../../../../test-utils/stubs/cards'
import { updateField } from '../../../reducers/update-field'
import { updatePlayer } from '../../../reducers/update-player'

import {
  createSetUpGameActor,
  expectInstance,
  player1,
  player2,
  carrot1,
  pumpkin1,
} from './helpers'

describe('bot turn action handling', () => {
  // NOTE: For each of these test cases, there was already a carrot in the
  // field as a result of createSetUpGameActor.
  test.each<{
    startingHand: IPlayer['hand']
    startingDeck: IPlayer['deck']
    resultingFieldCrops: IField['crops']
    resultingHand: IPlayer['hand']
    resultingDeck: IPlayer['deck']
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
    },
  ])(
    'plants and waters crops from starting hand $startingHand',
    ({
      startingHand,
      startingDeck,
      resultingFieldCrops,
      resultingHand,
      resultingDeck,
    }) => {
      const gameActor = createSetUpGameActor()

      const snapshot = gameActor.getSnapshot()
      let {
        context: { game },
      } = snapshot
      const {
        context: { shell },
      } = snapshot

      vi.spyOn(shell, 'triggerNotification')

      // NOTE: This causes the maximum amount of crops in the hand to be
      // played, but it plays from from the back of the hand to the front.
      vi.spyOn(randomNumber, 'generate').mockReturnValue(1)

      game = updatePlayer(game, player2.id, {
        deck: startingDeck,
        hand: startingHand,
      })
      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      // NOTE: Prompts bot player
      gameActor.send({ type: GameEvent.START_TURN })

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      const {
        value,
        context: { game: gameResult, cropsToPlayDuringBotTurn },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(gameResult.currentPlayerId).toBe(player1.id)
      expect(gameResult.table.players[player2.id].field.crops).toEqual<
        IField['crops']
      >(resultingFieldCrops)
      expect(gameResult.table.players[player2.id].hand).toEqual(resultingHand)
      expect(gameResult.table.players[player2.id].deck).toEqual(resultingDeck)
      expect(cropsToPlayDuringBotTurn).toEqual(0)

      const wereAnyCropsWatered = resultingFieldCrops.some(
        crop => crop && crop.wasWateredDuringTurn
      )

      const shellNotification: ShellNotification = {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: {
            ...stubCarrot,
            instanceId: expect.any(String) as string,
          } as CropInstance,
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
  // field as a result of createSetUpGameActor.
  test.each<{
    startingFieldCrops: IField['crops']
    startingDiscardPile: CardInstance[]
    resultingFieldCrops: IField['crops']
    resultingDiscardPile: CardInstance[]
  }>([
    {
      startingDiscardPile: [],
      startingFieldCrops: [],
      resultingFieldCrops: [],
      resultingDiscardPile: [],
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
        expect.objectContaining<CardInstance>({
          ...stubWater,
          instanceId: expect.any(String) as string,
        }),
      ] as CardInstance[],
    },
  ])(
    'harvests crops from starting field $startingFieldCrops',
    ({
      startingFieldCrops,
      startingDiscardPile,
      resultingFieldCrops,
      resultingDiscardPile,
    }) => {
      const gameActor = createSetUpGameActor()

      let {
        context: { game },
      } = gameActor.getSnapshot()

      game = updateField(game, player2.id, {
        crops: startingFieldCrops,
      })

      game = updatePlayer(game, player2.id, {
        discardPile: startingDiscardPile,
      })

      gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

      // NOTE: Prompts bot player
      gameActor.send({ type: GameEvent.START_TURN })

      // NOTE: Performs all bot turn logic
      vi.runAllTimers()

      const {
        value,
        context: { game: gameResult },
      } = gameActor.getSnapshot()

      expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(gameResult.currentPlayerId).toBe(player1.id)
      expect(gameResult.table.players[player2.id].field.crops).toEqual<
        IField['crops']
      >(resultingFieldCrops)
      expect(gameResult.table.players[player2.id].discardPile).toEqual<
        IPlayer['discardPile']
      >(resultingDiscardPile)
    }
  )

  describe('events', () => {
    // NOTE: For each of these test cases, there was already a carrot in the
    // field as a result of createSetUpGameActor.
    test.each<{
      numberOfEventCardsToPlay: number
      startingDeck: IPlayer['deck']
      startingHandEvents: IPlayer['hand']
      resultingHand: IPlayer['hand']
      resultingDiscardPile: CardInstance[]
    }>([
      {
        numberOfEventCardsToPlay: 0,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHandEvents: [stubRain],
        resultingHand: [stubRain, stubPumpkin],
        resultingDiscardPile: [],
      },
      {
        numberOfEventCardsToPlay: 1,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHandEvents: [stubRain],
        resultingHand: [stubPumpkin],
        resultingDiscardPile: [stubRain],
      },
      {
        numberOfEventCardsToPlay: 1,
        startingDeck: new Array<CardInstance>(DECK_SIZE).fill(stubPumpkin),
        startingHandEvents: [stubRain, stubRain],
        resultingHand: [stubRain, stubPumpkin],
        resultingDiscardPile: [stubRain],
      },
    ])(
      'plays $numberOfEventCardsToPlay event cards from hand with $startingHandEvents.length of them',
      ({
        numberOfEventCardsToPlay,
        startingDeck,
        startingHandEvents,
        resultingHand,
        resultingDiscardPile,
      }) => {
        const gameActor = createSetUpGameActor()

        const snapshot = gameActor.getSnapshot()
        let {
          context: { game },
        } = snapshot
        const {
          context: { shell },
        } = snapshot

        vi.spyOn(shell, 'triggerNotification')

        game = updatePlayer(game, player2.id, {
          deck: startingDeck,
          hand: startingHandEvents,
        })

        gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

        vi.spyOn(botLogic, 'getNumberOfEventCardsToPlay').mockReturnValueOnce(
          numberOfEventCardsToPlay
        )

        // NOTE: Prompts bot player
        gameActor.send({ type: GameEvent.START_TURN })

        // NOTE: Performs all bot turn logic
        vi.runAllTimers()

        const {
          value,
          context: { game: gameResult },
        } = gameActor.getSnapshot()

        expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
        expect(gameResult.currentPlayerId).toBe(player1.id)

        expect(gameResult.table.players[player2.id].hand).toEqual<
          IPlayer['hand']
        >(resultingHand)

        expect(gameResult.table.players[player2.id].discardPile).toEqual<
          IPlayer['discardPile']
        >(resultingDiscardPile)

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
      }
    )
  })
})
