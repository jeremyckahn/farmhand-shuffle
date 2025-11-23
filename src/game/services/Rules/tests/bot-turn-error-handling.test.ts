import { stubWater } from '../../../../test-utils/stubs/cards'
import { DECK_SIZE } from '../../../config'
import { updatePlayer } from '../../../reducers/update-player'
import { GameEvent, GameState } from '../../../types'
import { botLogic } from '../../BotLogic'
import { PlayerOutOfFundsError } from '../errors'

import { createSetUpGameActor, player2 } from './helpers'

describe('bot turn action error handling', () => {
  test('handles PlayerOutOfFundsError during PLAYING_WATER state', () => {
    const startingHand = [stubWater]
    const startingDeck = new Array(DECK_SIZE).fill(stubWater)

    const gameActor = createSetUpGameActor()

    const snapshot = gameActor.getSnapshot()
    let {
      context: { game },
    } = snapshot

    // Setup player 2 with a water card and a crop in field (from createSetUpGameActor)
    game = updatePlayer(game, player2.id, {
      deck: startingDeck,
      hand: startingHand,
    })
    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    // Mock getCropCardIndicesToWater to throw PlayerOutOfFundsError
    vi.spyOn(botLogic, 'getCropCardIndicesToWater').mockImplementation(() => {
      throw new PlayerOutOfFundsError('Mocked out of funds')
    })

    // Start turn
    gameActor.send({ type: GameEvent.START_TURN })

    // Run timers to process bot actions
    vi.runAllTimers()

    const { value } = gameActor.getSnapshot()

    // Should transition to GAME_OVER because of the error
    expect(value).toBe(GameState.GAME_OVER)

    // Verify the error event was raised (implicitly by checking state transition)
    // But we can also check if the game over state was reached.
  })
})
