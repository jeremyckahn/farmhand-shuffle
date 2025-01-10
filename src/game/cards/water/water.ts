import {
  CardType,
  GameEvent,
  GameEventPayload,
  IGame,
  IWater,
} from '../../types'

export const water: IWater = Object.freeze({
  type: CardType.WATER,
  id: 'water',
  name: 'Water',

  onPlayFromHand(
    _game: IGame,
    playerId: string,
    cardIdx: number
  ): GameEventPayload[GameEvent.PLAY_WATER] {
    return {
      type: GameEvent.PLAY_WATER,
      playerId,
      cardIdx,
    }
  },
})
