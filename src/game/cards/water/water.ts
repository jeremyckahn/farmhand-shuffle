import { CardType, IGame, IWater } from '../../types'

export const water: IWater = Object.freeze({
  type: CardType.WATER,
  id: 'water',
  async onPlayFromHand(game: IGame, _playerId: string, _cardIdx: number) {
    console.log('TODO: Implement this')

    return game
  },
})
