import { initialHandSize } from '../../config'
import { drawCard } from '../../reducers/draw-card'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { moveFromHandToDiscardPile } from '../../reducers/move-from-hand-to-discard-pile'
import * as cards from '../../cards'
import { IGame, IPlayer, IPlayerSeed } from '../../types'
import { Factory } from '../Factory'

const isCardId = (id: string): id is keyof typeof cards => id in cards

export class Rules {
  static processGameStart(playerSeeds: IPlayerSeed[]): IGame {
    let game = Factory.buildGame()

    for (const playerSeed of playerSeeds) {
      const player = { ...Factory.buildPlayer(), ...playerSeed }
      game.table.players[player.id] = player
      game = shuffleDeck(game, player.id)
      game = drawCard(game, player.id, initialHandSize)
    }

    return game
  }

  static processTurnStart(game: IGame): IGame {
    // TODO: Pay tax to community fund
    // TODO: Draw a card from the deck

    return game
  }

  static processTurnEnd(game: IGame): IGame {
    // TODO: Implement this
    return game
  }

  static async playCardFromHand(
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ): Promise<IGame> {
    const { hand } = game.table.players[playerId]
    const cardId = hand[cardIdx]

    if (!cardId) {
      throw new Error(
        `Card index ${cardIdx} is not in player ${playerId}'s hand`
      )
    }

    if (!isCardId(cardId)) {
      throw new Error(`${cardId} is not a valid card ID`)
    }

    const card = cards[cardId]
    game = await card.onPlayFromHand(game, playerId, cardIdx)

    game = moveFromHandToDiscardPile(game, playerId, cardIdx)

    // FIXME: Move discarded card to the discard pile

    return game
  }
}
