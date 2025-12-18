import { randomNumber } from '../../../../../services/RandomNumber'
import {
  stubPlayer1,
  stubPlayer2,
} from '../../../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin } from '../../../../cards'
import { updatePlayer } from '../../../../reducers/update-player'
import { CropInstance, MatchEvent, ICard } from '../../../../types'

import { rules } from '../..'

export const player1 = stubPlayer1
export const player2 = stubPlayer2

export const playerSeeds = [player1, player2]

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
 * Initializes a match actor and sets up each player with a played crop.
 */
export const createSetUpMatchActor = () => {
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
    hand: [instantiate(carrot)],
  })
  match = updatePlayer(match, player2.id, {
    hand: [instantiate(carrot)],
  })

  matchActor.send({ type: MatchEvent.DANGEROUSLY_SET_CONTEXT, match })

  matchActor.send({
    type: MatchEvent.PLAY_CROP,
    playerId: player1.id,
    cardIdx: 0,
  })

  matchActor.send({
    // NOTE: Prompts bot player
    type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION,
  })

  // NOTE: Performs all bot setup logic
  vi.runAllTimers()

  matchActor.send({
    // NOTE: Prompts player 1 again
    type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION,
  })

  return matchActor
}

beforeEach(() => {
  vi.spyOn(randomNumber, 'generate').mockReturnValue(0)
  vi.spyOn(randomNumber, 'shuffle').mockImplementation(
    <T>(arr: T[] | null | undefined) => arr || []
  )
})
