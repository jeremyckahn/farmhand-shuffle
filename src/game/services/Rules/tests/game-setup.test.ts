import { GameEvent, GameState, IPlayedCrop } from '../../../types'
import { rules } from '..'
import { updatePlayer } from '../../../reducers/update-player'

import { carrot1, carrot2, player1, player2, playerSeeds } from './helpers'

describe('game setup', () => {
  test('initializes game', () => {
    const gameActor = rules.startGame()

    const { value } = gameActor.getSnapshot()

    expect(value).toBe(GameState.UNINITIALIZED)
  })

  test('lets the player set up crops', () => {
    const gameActor = rules.startGame()

    gameActor.send({
      type: GameEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [carrot1, carrot2],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
    // NOTE: Plays first carrot card
    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })
    // NOTE: Plays second carrot card
    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_SETUP_ACTION)
    expect(gameResult.table.players[player1.id].hand).toEqual([])
    expect(gameResult.table.players[player1.id].field.crops).toEqual<
      IPlayedCrop[]
    >([
      { instance: carrot1, wasWateredDuringTurn: false, waterCards: 0 },
      { instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 },
    ])
  })

  test('completes the setup sequence', () => {
    const gameActor = rules.startGame()

    gameActor.send({
      type: GameEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [carrot1],
    })
    game = updatePlayer(game, player2.id, {
      hand: [carrot2],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })
    // NOTE: Prompts player 2
    gameActor.send({
      type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
    })

    vi.runAllTimers()

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    // NOTE: Indicates that the bot has completed setup and has given control back to the player
    expect(value).toBe(GameState.WAITING_FOR_PLAYER_TURN_ACTION)

    expect(gameResult.currentPlayerId).toEqual(player1.id)
    expect(gameResult.table.players[player2.id].field.crops).toEqual<
      IPlayedCrop[]
    >([{ instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 }])
  })

  test('does not let game start until all players have set up', () => {
    const gameActor = rules.startGame()

    gameActor.send({
      type: GameEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      hand: [carrot1],
    })

    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })
    gameActor.send({
      type: GameEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })

    const previousSnapshot = gameActor.getSnapshot()

    gameActor.send({
      type: GameEvent.START_TURN,
    })

    const latestSnapshot = gameActor.getSnapshot()

    // NOTE: Indicates that the state change was prevented by a guard
    expect(previousSnapshot).toEqual(latestSnapshot)
  })
})
