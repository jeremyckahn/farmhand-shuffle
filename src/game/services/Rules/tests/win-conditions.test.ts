import { GameEvent, GameState } from '../../../types'
import { stubPlayer1, stubPlayer2 } from '../../../../test-utils/stubs/players'
import { updatePlayer } from '../../../reducers/update-player'

import { createSetUpGameActor, player1, player2 } from './helpers'

describe('win conditions', () => {
  test('the player running out of money causes the bot to win', () => {
    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player1.id, {
      funds: 1,
    })
    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    // NOTE: Prompts bot player
    gameActor.send({ type: GameEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      value,
      context: {
        game: { winner },
      },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.GAME_OVER)
    expect(winner).toEqual(stubPlayer2.id)
  })

  test('the bot running out of money causes the player to win', () => {
    const gameActor = createSetUpGameActor()

    let {
      context: { game },
    } = gameActor.getSnapshot()

    game = updatePlayer(game, player2.id, {
      funds: 1,
    })
    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    // NOTE: Prompts bot player
    gameActor.send({ type: GameEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const {
      value,
      context: {
        game: { winner },
      },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.GAME_OVER)
    expect(winner).toEqual(stubPlayer1.id)
  })
})
