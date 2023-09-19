import { updatePlayedCrop } from '../../reducers/update-played-crop/index'
import { InteractionHandlers } from '../../services/Rules/InteractionHandlers'
import { CardType, IGame, IPlayedCrop, IWater } from '../../types'

export const water: IWater = Object.freeze({
  type: CardType.WATER,
  id: 'water',
  async onPlayFromHand(
    game: IGame,
    interactionHandlers: InteractionHandlers,
    playerId: string
  ) {
    const selectedCardIdx = await interactionHandlers.selectCropFromField(
      game,
      playerId
    )

    const playedCrop = game.table.players[playerId].field.crops[selectedCardIdx]
    const newPlayedCrop: IPlayedCrop = {
      ...playedCrop,
      waterCards: playedCrop.waterCards + 1,
    }

    game = updatePlayedCrop(game, playerId, selectedCardIdx, newPlayedCrop)

    return game
  },
})
