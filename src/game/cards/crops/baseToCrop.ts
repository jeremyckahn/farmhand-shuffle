import {
  CardType,
  ICrop,
  IGame,
  GameEvent,
  GameEventPayload,
} from '../../types'

export const baseToCrop = (
  base: Pick<ICrop, 'id' | 'waterToMature' | 'name'>
): ICrop => {
  return Object.freeze({
    type: CardType.CROP,

    onPlayFromHand: (
      _game: IGame,
      playerId: string,
      cardIdx: number
    ): GameEventPayload[GameEvent.PLAY_CROP] => {
      return {
        type: GameEvent.PLAY_CROP,
        playerId,
        cardIdx,
      }
    },
    ...base,
  })
}
