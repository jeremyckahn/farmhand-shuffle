import {
  CardType,
  GameEvent,
  GameEventPayload,
  IEvent,
  IGame,
} from '../../types'

export const rain: IEvent = Object.freeze({
  type: CardType.EVENT,
  id: 'rain',
  name: 'Rain',

  onPlayFromHand(
    _game: IGame,
    playerId: string,
    cardIdx: number
  ): GameEventPayload[GameEvent.PLAY_EVENT] {
    return {
      type: GameEvent.PLAY_EVENT,
      playerId,
      cardIdx,
    }
  },
})
