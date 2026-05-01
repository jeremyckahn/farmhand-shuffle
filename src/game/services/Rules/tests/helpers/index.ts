import { randomNumber } from '../../../../../services/RandomNumber'
import {
  stubPlayer1,
  stubPlayer2,
} from '../../../../../test-utils/stubs/players'
import { carrot, instantiate, pumpkin } from '../../../../cards'
import { updatePlayer } from '../../../../reducers/update-player'
import {
  CropInstance,
  MatchEvent,
  ICard,
  CardType,
  CardInstance,
  WaterInstance,
  EventInstance,
  ToolInstance,
} from '../../../../types'

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

const expectInstance = (id: string, type: CardType): CardInstance => {
  return Object.assign(
    expect.objectContaining<Partial<CardInstance>>({
      id,
    }),
    {
      // NOTE: These properties are needed to satisfy type guards
      id,
      instanceId: stubInstanceId,
      type,
    }
  ) as CardInstance
}

const stubInstanceId = 'stub-instance-id'

export const expectCropInstance = ({ id }: ICard): CropInstance => {
  const expectedInstance = Object.assign(expectInstance(id, CardType.CROP), {
    type: CardType.CROP,
  }) as CropInstance

  return expectedInstance
}

export const expectWaterInstance = ({ id }: ICard): WaterInstance => {
  return expectInstance(id, CardType.WATER) as WaterInstance
}

export const expectEventInstance = ({ id }: ICard): EventInstance => {
  return expectInstance(id, CardType.EVENT) as EventInstance
}

export const expectToolInstance = ({ id }: ICard): ToolInstance => {
  return expectInstance(id, CardType.TOOL) as ToolInstance
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
    type: MatchEvent.SELECT_CARD_POSITION,
    playerId: player1.id,
    cardIdxInHand: 0,
    fieldIdxToPlace: 0,
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
