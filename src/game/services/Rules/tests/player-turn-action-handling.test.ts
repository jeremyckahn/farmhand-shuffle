import { carrot, instantiate, water } from '../../../cards'
import {
  MatchEvent,
  MatchState,
  IField,
  IPlayedCrop,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import { factory } from '../../Factory'
import { STANDARD_FIELD_SIZE } from '../../../config'
import * as startTurnModule from '../../../reducers/start-turn'
import { stubRain, stubShovel } from '../../../../test-utils/stubs/cards'
import { updatePlayer } from '../../../reducers/update-player'

import {
  createSetUpMatchActor,
  expectInstance,
  player1,
  player2,
  pumpkin1,
} from './helpers'

describe('player turn action handling', () => {
  test('player can play a crop card', () => {
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
      cardIdx: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(p1.hand).toEqual([])
    expect(p1.field.crops).toEqual<IField['crops']>([
      {
        instance: expectInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      },
      { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
    ])
    expect(p1.cardsPlayedDuringTurn).toEqual([pumpkin1])
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
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(p1.field.crops).toEqual<IField['crops']>([undefined])
    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CROP_HARVESTED,
        payload: {
          cropHarvested: expectInstance(carrot),
        },
      }
    )
    expect(p1.cardsPlayedDuringTurn).toEqual([])
  })

  test('player cannot play crop card if field is full', () => {
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

    const matchActor = createSetUpMatchActor()

    let {
      context: { match },
    } = matchActor.getSnapshot()

    const filledField = {
      crops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill(
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
      cardIdx: 0,
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
      cardIdx: 0,
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
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(p1.hand).toEqual([])
    expect(p1.field.crops).toEqual<IField['crops']>([
      {
        instance: expectInstance(carrot),
        wasWateredDuringTurn: true,
        waterCards: 1,
      },
    ])
    expect(p1.cardsPlayedDuringTurn).toEqual([expectInstance(water)])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: expectInstance(carrot),
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
      cardIdx: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(p1.hand).toEqual([])
    expect(p1.discardPile).toEqual([stubRain])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.EVENT_CARD_PLAYED,
        payload: {
          eventCard: stubRain,
        },
      }
    )
    expect(p1.cardsPlayedDuringTurn).toEqual([stubRain])
  })

  test('player can play a tool card', () => {
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
      cardIdx: 0,
    })

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')
    const p1Before = match.table.players[player1.id]
    if (!p1Before) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    // NOTE: Asserts that shovel card was played (two cards were drawn)
    expect(p1.hand).toEqual(p1Before.deck.slice(0, 2))

    expect(p1.discardPile).toEqual([stubShovel])
    expect(p1.cardsPlayedDuringTurn).toEqual([stubShovel])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.TOOL_CARD_PLAYED,
        payload: {
          toolCard: stubShovel,
        },
      }
    )
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
      cardIdx: 0,
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
      cardIdx: 0,
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
    const p1 = matchResult.table.players[player1.id]
    if (!p1) throw new Error('Player not found')

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    expect(p1.cardsPlayedDuringTurn).toEqual([])

    const firstCall = startPlayerTurn.mock.calls[0]
    if (!firstCall) throw new Error('startTurn not called')
    // NOTE: Indicates that bot logic has been executed
    expect(firstCall[1]).toEqual(player2.id)

    // NOTE: Indicates that control has been returned back to the player
    expect(matchResult.currentPlayerId).toEqual(player1.id)
  })
})
