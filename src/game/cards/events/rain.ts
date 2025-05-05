import { updateField } from '../../reducers/update-field'
import {
  CardType,
  GameEvent,
  GameEventPayload,
  IEvent,
  IGame,
} from '../../types'

export const rain: IEvent = Object.freeze<IEvent>({
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

  /**
   *  Gives all players an additional water card to each of their crops.
   *
   *  @param game - The current game state.
   *
   *  @returns The updated game state.
   */
  applyEffect: game => {
    for (const playerId in game.table.players) {
      const player = game.table.players[playerId]

      const crops = player.field.crops.map(crop => {
        if (!crop) return crop

        return {
          ...crop,
          wasWateredTuringTurn: true,
          waterCards: crop?.waterCards + 1,
        }
      })

      game = updateField(game, playerId, { crops })
    }

    return game
  },
})
