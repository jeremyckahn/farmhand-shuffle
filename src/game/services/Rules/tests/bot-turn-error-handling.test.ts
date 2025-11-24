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

    game = updatePlayer(game, player2.id, {
      deck: startingDeck,
      hand: startingHand,
    })
    gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

    vi.spyOn(botLogic, 'getCropCardIndicesToWater').mockImplementation(() => {
      throw new PlayerOutOfFundsError(player2.id)
    })

    gameActor.send({ type: GameEvent.START_TURN })

    // NOTE: Performs all bot turn logic
    vi.runAllTimers()

    const { value } = gameActor.getSnapshot()

    expect(value).toBe(GameState.GAME_OVER)
  })
})
