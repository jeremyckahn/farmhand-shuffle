import { InteractionHandlers } from '../../services/Rules/InteractionHandlers'
import { CardType, IGame, IWater } from '../../types'

export const water: IWater = Object.freeze({
  type: CardType.WATER,
  id: 'water',
  async onPlayFromHand(
    game: IGame,
    interactionHandlers: InteractionHandlers,
    playerId: string,
    _cardIdx: number
  ) {
    const selectedCardIdx = await interactionHandlers.selectCropFromField(
      game,
      playerId
    )

    console.log('TODO: Implement this')
    console.log(`selectedCardIdx: ${selectedCardIdx}`)

    return game
  },
})
