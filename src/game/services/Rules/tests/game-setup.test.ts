import { MatchEvent, MatchState, IPlayedCrop } from '../../../types'
import { rules } from '..'
import { updatePlayer } from '../../../reducers/update-player'

import { carrot1, carrot2, player1, player2, playerSeeds } from './helpers'

describe('match setup', () => {
  test('initializes match', () => {
    const matchActor = rules.startMatch()

    const { value } = matchActor.getSnapshot()

    expect(value).toBe(MatchState.UNINITIALIZED)
  })

  test('lets the player set up crops', () => {
    const matchActor = rules.startMatch()

    matchActor.send({
      type: MatchEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [carrot1, carrot2],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    // NOTE: Plays first carrot card
    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })
    // NOTE: Plays second carrot card
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

    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_SETUP_ACTION)
    expect(p1.hand).toEqual([])
    expect(p1.field.crops).toEqual<IPlayedCrop[]>([
      { instance: carrot1, wasWateredDuringTurn: false, waterCards: 0 },
      { instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 },
    ])
    expect(p1.cardsPlayedDuringTurn).toEqual([carrot2, carrot1])
  })

  test('completes the bot setup sequence', () => {
    const matchActor = rules.startMatch()

    matchActor.send({
      type: MatchEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [carrot1],
    })
    match = updatePlayer(match, player2.id, {
      hand: [carrot2],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })
    // NOTE: Prompts player 2
    matchActor.send({
      type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION,
    })

    vi.runAllTimers()

    const {
      value,
      context: { match: matchResult },
    } = matchActor.getSnapshot()
    const p2 = matchResult.table.players[player2.id]
    if (!p2) throw new Error('Player not found')

    // NOTE: Indicates that the bot has completed setup and has given control back to the player
    expect(value).toBe(MatchState.WAITING_FOR_PLAYER_TURN_ACTION)

    expect(matchResult.currentPlayerId).toEqual(player1.id)
    expect(p2.field.crops).toEqual<IPlayedCrop[]>([
      { instance: carrot2, wasWateredDuringTurn: false, waterCards: 0 },
    ])
    expect(p2.cardsPlayedDuringTurn).toEqual([carrot2])
  })

  test('does not let match start until all players have set up', () => {
    const matchActor = rules.startMatch()

    matchActor.send({
      type: MatchEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    let {
      context: { match },
    } = matchActor.getSnapshot()

    match = updatePlayer(match, player1.id, {
      hand: [carrot1],
    })

    matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })
    matchActor.send({
      type: MatchEvent.PLAY_CROP,
      playerId: player1.id,
      cardIdx: 0,
    })

    const previousSnapshot = matchActor.getSnapshot()

    matchActor.send({
      type: MatchEvent.START_TURN,
    })

    const latestSnapshot = matchActor.getSnapshot()

    // NOTE: Indicates that the state change was prevented by a guard
    expect(previousSnapshot).toEqual(latestSnapshot)
  })
})
