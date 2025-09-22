import { GameEvent, GameState } from '../../../types'
import { stubPlayer1 } from '../../../../test-utils/stubs/players'
import { updatePlayer } from '../../../reducers/update-player'

import { createSetUpGameActor, player1, playerSeeds } from './helpers'

describe('game over state', () => {
  test('game can be restarted', () => {
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

    gameActor.send({
      type: GameEvent.INIT,
      playerSeeds,
      userPlayerId: player1.id,
    })

    const {
      value,
      context: { game: gameResult },
    } = gameActor.getSnapshot()

    expect(value).toBe(GameState.WAITING_FOR_PLAYER_SETUP_ACTION)
    expect(gameResult.currentPlayerId).toEqual(stubPlayer1.id)
  })
})
