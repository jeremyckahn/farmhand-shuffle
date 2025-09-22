import { carrot, instantiate, water } from '../../../cards'
import {
  CropInstance,
  GameEvent,
  GameState,
  IPlayedCrop,
  ShellNotification,
  ShellNotificationType,
} from '../../../types'
import { factory } from '../../Factory'
import { STANDARD_FIELD_SIZE } from '../../../config'
import * as startTurnModule from '../../../reducers/start-turn'
import { stubCarrot, stubRain } from '../../../../test-utils/stubs/cards'
import { updatePlayer } from '../../../reducers/update-player'

import {
  createSetUpGameActor,
  expectInstance,
  player1,
  player2,
  pumpkin1,
} from './helpers'

describe('player turn action handling', () => {
  test('player can play a crop card', () => {
    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [pumpkin1],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(gameResult.table.players[player1.id].hand).toEqual([])
    expect(gameResult.table.players[player1.id].field.crops).toEqual<
      IPlayedCrop[]
    >([
      {
        instance: expectInstance(carrot),
        wasWateredDuringTurn: false,
        waterCards: 0,
      },
      { instance: pumpkin1, wasWateredDuringTurn: false, waterCards: 0 },
    ])
  })

  test('player cannot play crop card if field is full', () => {
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    const filledField = {
      crops: new Array<IPlayedCrop>(STANDARD_FIELD_SIZE).fill(
        factory.buildPlayedCrop(instantiate(carrot))
      ),
    }

    game = updatePlayer(game, player1.id, {
      hand: [instantiate(carrot)],
      field: filledField,
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    const previousSnapshot = gameActor.getSnapshot()

    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })

    const latestSnapshot = gameActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('player can play a water card', () => {
    const gameActor = createSetUpGameActor()

    const snapshot = gameActor.getSnapshot()
    let {
      context: { game },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    game = updatePlayer(game, player1.id, {
      hand: [instantiate(water)],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    // NOTE: Plays the water card
    gameActor.send({
      type: GameEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdx: 0,
    })
    gameActor.send({
      type: GameEvent.SELECT_CROP_TO_WATER,
      playerId: player1.id,
      cropIdxInFieldToWater: 0,
      waterCardInHandIdx: 0,
    })

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(gameResult.table.players[player1.id].hand).toEqual([])
    expect(gameResult.table.players[player1.id].field.crops).toEqual<
      IPlayedCrop[]
    >([
      {
        instance: expectInstance(carrot),
        wasWateredDuringTurn: true,
        waterCards: 1,
      },
    ])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.CROP_WATERED,
        payload: {
          cropWatered: {
            ...stubCarrot,
            instanceId: expect.any(String) as string,
          } as CropInstance,
        },
      }
    )
  })

  test('player can play an event card', () => {
    const gameActor = createSetUpGameActor()

    const snapshot = gameActor.getSnapshot()
    let {
      context: { game },
    } = snapshot
    const {
      context: { shell },
    } = snapshot

    vi.spyOn(shell, 'triggerNotification')

    game = updatePlayer(game, player1.id, {
      hand: [stubRain],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    // NOTE: Plays the event card
    gameActor.send({
      type: GameEvent.PLAY_EVENT,
      playerId: player1.id,
      cardIdx: 0,
    })

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)
    expect(gameResult.table.players[player1.id].hand).toEqual([])
    expect(gameResult.table.players[player1.id].discardPile).toEqual([stubRain])

    expect(shell.triggerNotification).toHaveBeenCalledWith<ShellNotification[]>(
      {
        type: ShellNotificationType.EVENT_CARD_PLAYED,
        payload: {
          eventCard: stubRain,
        },
      }
    )
  })

  test('player can abort playing a water card', () => {
    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [instantiate(water)],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    const previousSnapshot = gameActor.getSnapshot()

    // NOTE: Plays the water card
    gameActor.send({
      type: GameEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdx: 0,
    })

    gameActor.send({
      type: GameEvent.OPERATION_ABORTED,
    })

    const latestSnapshot = gameActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('handles failure when watering a crop', () => {
    vi.spyOn(console, 'error').mockImplementationOnce(vi.fn())

    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [instantiate(water)],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    const previousSnapshot = gameActor.getSnapshot()

    // NOTE: Plays the water card
    gameActor.send({
      type: GameEvent.PLAY_WATER,
      playerId: player1.id,
      cardIdx: 0,
    })

    gameActor.send({
      type: GameEvent.SELECT_CROP_TO_WATER,
      playerId: player1.id,
      cropIdxInFieldToWater: -1, // An intentionally invalid index
      waterCardInHandIdx: 0,
    })

    const latestSnapshot = gameActor.getSnapshot()

    expect(latestSnapshot).toEqual(previousSnapshot)
  })

  test('player can end their turn', () => {
    const gameActor = createSetUpGameActor()

    const startPlayerTurn = vi.spyOn(startTurnModule, 'startTurn')
    gameActor.send({ type: GameEvent.START_TURN })

    vi.runAllTimers()

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)

    // NOTE: Indicates that bot logic has been executed
    expect(startPlayerTurn.mock.calls[0][1]).toEqual(player2.id)

    // NOTE: Indicates that control has been returned back to the player
    expect(gameResult.currentPlayerId).toEqual(player1.id)
  })
})
