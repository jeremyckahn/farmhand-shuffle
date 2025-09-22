import { randomNumber } from '../../../../../services/RandomNumber'
import {
  stubPlayer1,
  stubPlayer2,
} from '../../../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin } from '../../../../cards'
import { updatePlayer } from '../../../../reducers/update-player'
import { CropInstance, GameEvent, ICard } from '../../../../types'

import { rules } from '../..'

export const player1 = stubPlayer1
export const player2 = stubPlayer2

export const playerSeeds = [player1, player2]

vi.mock('lodash.shuffle')

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

export const expectInstance = ({ id }: ICard): CropInstance => {
  return expect.objectContaining<Partial<CropInstance>>({
    id,
  }) as CropInstance
}

export const carrot1 = instantiate(carrot)
export const carrot2 = instantiate(carrot)
export const pumpkin1 = instantiate(pumpkin)

/**
 * Initializes a game actor and sets up each player with a played crop.
 */
export const createSetUpGameActor = () => {
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
    hand: [instantiate(carrot)],
  })
  game = updatePlayer(game, player2.id, {
    hand: [instantiate(carrot)],
  })

  gameActor.send({ type: GameEvent.DANGEROUSLY_SET_CONTEXT, game })

  gameActor.send({
    type: GameEvent.PLAY_CROP,
    playerId: player1.id,
    cardIdx: 0,
  })

  gameActor.send({
    // NOTE: Prompts bot player
    type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
  })

  // NOTE: Performs all bot setup logic
  vi.runAllTimers()

  gameActor.send({
    // NOTE: Prompts player 1 again
    type: GameEvent.PROMPT_PLAYER_FOR_SETUP_ACTION,
  })

  return gameActor
}

beforeEach(() => {
  vi.spyOn(randomNumber, 'generate').mockReturnValue(0)
})
