import {
  stubCarrot,
  stubPumpkin,
  stubRain,
  stubShovel,
  stubSprinkler,
} from '../../../../test-utils/stubs/cards'
import { carrot, instantiate, sprinkler, water } from '../../../cards'
import { STANDARD_FIELD_SIZE } from '../../../config'
import * as startTurnModule from '../../../reducers/start-turn'
import { updatePlayer } from '../../../reducers/update-player'
import {
  IField,
  IPlayedCrop,
  MatchEvent,
  MatchState,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import { assertIsNonNullable } from '../../../types/guards'
import { factory } from '../../Factory'

import {
  createSetUpMatchActor,
  expectCropInstance,
  expectToolInstance,
  expectWaterInstance,
  player1,
  player2,
  pumpkin1,
} from './helpers'

describe('player turn action handling', () => {
  test('player can play and place a crop card', () => {
    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [pumpkin1],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdxInHand: 0,
    })
    matchActor.send({
      type: MatchEvent.SELECT_CARD_POSITION,
      playerId: player1.id,
      cardIdxInHand: 0,
      fieldIdxToPlace: 1,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.hand).toEqual([])
    expect(maybePlayer1.field.cards).toEqual<IField['cards']>([
      {
        instance: expectCropInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      },
      { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
    ])
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([pumpkin1])
  })

  test('player can abort placing a crop card', () => {
    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [pumpkin1],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdxInHand: 0,
    })
    matchActor.send({
      type: MatchEvent.OPERATION_ABORTED,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.hand).toEqual([pumpkin1])
    expect(maybePlayer1.field.cards).toEqual<IField['cards']>([
      {
        instance: expectCropInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      },
    ])
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([])
  })

  test('player can harvest a crop card', () => {
    const matchActor = createSetUpMatchActor()

    const {
      context: { shell },
    } = matchActor.getSnapshot()

    vi.spyOn(shell, 'triggerNotification')

    matchActor.send({
      type: MatchEvent.HARVEST_CROP,
      playerId: player1.id,
      cropIdxInFieldToHarvest: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.field.cards).toEqual<IField['cards']>([undefined])
    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CROP_HARVESTED,
        payload: {
          cropHarvested: expectCropInstance(carrot),
        },
      }
    )
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([])
  })

  test('player cannot play crop card if field is full', () => {
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    const filledField = {
      cards: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill(
        factory.buildPlayedCrop(instantiate(carrot))
      ),
    }

    match = updatePlayer(match, player1.id, {
      hand: [instantiate(carrot)],
      field: filledField,
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    const previousSnapshot = matchActor.getSnapshot()

    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    matchActor.send({
      type: MatchEvent.SELECT_CARD_POSITION,
      playerId: player1.id,
      cardIdxInHand: 0,
      fieldIdxToPlace: 1,
    })

    const latestSnapshot = matchActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('player can play a water card', () => {
    const matchActor = createSetUpMatchActor()

    const snapshot = matchActor.getSnapshot()
    let {
      context: { match },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    match = updatePlayer(match, player1.id, {
      hand: [instantiate(water)],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Plays the water card
    matchActor.send({
      type: MatchEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdxInHand: 0,
    })
    matchActor.send({
      type: MatchEvent.SELECT_CROP_TO_WATER,
      playerId: player1.id,
      cropIdxInFieldToWater: 0,
      waterCardInHandIdx: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.hand).toEqual([])
    expect(maybePlayer1.field.cards).toEqual<IField['cards']>([
      {
        instance: expectCropInstance(carrot),
        wasWateredDuringTurn: true,
        waterCards: 1,
      },
    ])
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([
      expectWaterInstance(water),
    ])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: expectCropInstance(carrot),
        },
      }
    )
  })

  test('player can play an event card', () => {
    const matchActor = createSetUpMatchActor()

    const snapshot = matchActor.getSnapshot()
    let {
      context: { match },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    match = updatePlayer(match, player1.id, {
      hand: [stubRain],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Plays the event card
    matchActor.send({
      type: MatchEvent.PLAY_EVENT,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.hand).toEqual([])
    expect(maybePlayer1.discardPile).toEqual([stubRain])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.EVENT_CARD_PLAYED,
        payload: {
          eventCard: stubRain,
        },
      }
    )
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([stubRain])
  })

  test('player can play a non-plantable tool card', () => {
    const matchActor = createSetUpMatchActor()

    const snapshot = matchActor.getSnapshot()
    let {
      context: { match },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    match = updatePlayer(match, player1.id, {
      hand: [stubShovel],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Plays the tool card
    matchActor.send({
      type: MatchEvent.PLAY_TOOL,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    const player1Before = match.table.players[player1.id]

    if (!player1Before) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    // NOTE: Asserts that shovel card was played (two cards were drawn)
    expect(maybePlayer1.hand).toEqual(player1Before.deck.slice(0, 2))

    expect(maybePlayer1.discardPile).toEqual([stubShovel])
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([stubShovel])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.TOOL_CARD_PLAYED,
        payload: {
          toolCard: stubShovel,
        },
      }
    )
  })

  test('player can play a plantable tool card', () => {
    const matchActor = createSetUpMatchActor()

    const snapshot = matchActor.getSnapshot()
    let {
      context: { match },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    match = updatePlayer(match, player1.id, {
      hand: [stubSprinkler],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Plays the tool card
    matchActor.send({
      type: MatchEvent.PLAY_TOOL,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    assertIsNonNullable(maybePlayer1)

    const player1Before = match.table.players[player1.id]

    assertIsNonNullable(player1Before)

    expect(shell.triggerNotification).not.toHaveBeenCalledWith<
      ShellNotification[]
    >({
      type: ShellNotificationType.TOOL_CARD_PLAYED,
      payload: {
        toolCard: stubSprinkler,
      },
    })

    expect(value).toBe(MatchState.CHOOSING_CARD_POSITION)

    matchActor.send({
      type: MatchEvent.SELECT_CARD_POSITION,
      playerId: player1.id,
      cardIdxInHand: 0,
      fieldIdxToPlace: 0,
    })

    {
      const {
        value,
        context: { match: matchResult },
      } = matchActor.getSnapshot()
      const maybePlayer1 = matchResult.table.players[player1.id]

      assertIsNonNullable(maybePlayer1)

      expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
      expect(maybePlayer1.discardPile).toEqual([])
      expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([stubSprinkler])
    }

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.TOOL_CARD_PLAYED,
        payload: {
          toolCard: stubSprinkler,
        },
      }
    )
  })

  test('player can discard a planted a tool card', () => {
    const matchActor = createSetUpMatchActor()

    const {
      context: { shell },
    } = matchActor.getSnapshot()
    let {
      context: { match },
    } = matchActor.getSnapshot()

    vi.spyOn(shell, 'triggerNotification')

    match = updatePlayer(match, player1.id, {
      field: {
        cards: [factory.buildPlayedTool(stubSprinkler)],
      },
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    matchActor.send({
      type: MatchEvent.DISCARD_CARD_FROM_FIELD,
      playerId: player1.id,
      cardIdxInField: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()

    const maybePlayer1 = matchResult.table.players[player1.id]

    assertIsNonNullable(maybePlayer1, 'Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.field.cards).toEqual<IField['cards']>([undefined])
    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CARD_DISCARDED,
        payload: {
          cardDiscarded: expectToolInstance(sprinkler),
        },
      }
    )
    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([])
  })

  test('performs any daily effects for planted tool cards at the start of every turn', () => {
    const matchActor = createSetUpMatchActor()

    const startingFieldCards: IField['cards'] = [
      factory.buildPlayedCrop(stubCarrot),
      factory.buildPlayedTool(stubSprinkler),
      factory.buildPlayedCrop(stubPumpkin),
    ]
    const resultingFieldCards: IField['cards'] = [
      {
        ...factory.buildPlayedCrop(stubCarrot),
        wasWateredDuringTurn: true,
        waterCards: 1,
      },
      factory.buildPlayedTool(stubSprinkler),
      {
        ...factory.buildPlayedCrop(stubPumpkin),
        wasWateredDuringTurn: true,
        waterCards: 1,
      },
    ]

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      field: {
        cards: startingFieldCards,
      },
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    // NOTE: Returns control to the bot
    matchActor.send({ type: MatchEvent.START_TURN })
    // NOTE: Performs all bot turn logic and returns control back to the player
    vi.runAllTimers()

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()

    const maybePlayer1 = matchResult.table.players[player1.id]

    assertIsNonNullable(maybePlayer1, 'Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(maybePlayer1.field.cards).toEqual(resultingFieldCards)
  })

  test('player can abort playing a water card', () => {
    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [instantiate(water)],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    const previousSnapshot = matchActor.getSnapshot()

    // NOTE: Plays the water card
    matchActor.send({
      type: MatchEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    matchActor.send({
      type: MatchEvent.OPERATION_ABORTED,
    })

    const latestSnapshot = matchActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('handles failure when watering a crop', () => {
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [instantiate(water)],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

    // NOTE: Plays the water card
    matchActor.send({
      type: MatchEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdxInHand: 0,
    })

    const previousSnapshot = matchActor.getSnapshot()

    matchActor.send({
      type: MatchEvent.SELECT_CROP_TO_WATER,
      playerId: player1.id,
      cropIdxInFieldToWater: -1, // An intentionally invalid index
      waterCardInHandIdx: 0,
    })

    const latestSnapshot = matchActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('player can end their turn', () => {
    const matchActor = createSetUpMatchActor()

    const startPlayerTurn = vi.spyOn(startTurnModule, 'startTurn')

    matchActor.send({ type: MatchEvent.START_TURN })

    vi.runAllTimers()

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const maybePlayer1 = matchResult.table.players[player1.id]

    if (!maybePlayer1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    expect(maybePlayer1.cardsPlayedDuringTurn).toEqual([])

    const firstCall = startPlayerTurn.mock.calls[0]

    if (!firstCall) throw new Error('startTurn not called')
    // NOTE: Indicates that bot logic has been executed
    expect(firstCall[1]).toEqual(player2.id)

    // NOTE: Indicates that control has been returned back to the player
    expect(matchResult.currentPlayerId).toEqual(player1.id)
  })
})
