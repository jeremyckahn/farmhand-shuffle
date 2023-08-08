import { removeAt } from '../../../lib/array/removeAt'

import { IGame, IPlayer } from '../../types'

import { Factory } from '../Factory'

export class Rules {
  static processGameStart(): IGame {
    const game = Factory.buildGame()

    // TODO: Set up player hands
    // TODO: Set up player decks

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

  // FIXME: Test hand updating
  static playCardFromHand(
    game: IGame,
    playerId: IPlayer['id'],
    cardIdx: number
  ): IGame {
    const { hand } = game.table.players[playerId]
    const cardId = hand[cardIdx]

    if (!cardId) {
      throw new Error(
        `Card index ${cardIdx} is not in player ${playerId}'s hand`
      )
    }

    const newHand = removeAt(hand, cardIdx)

    // TODO: Retrieve card by ID
    // TODO: Process card

    return {
      ...game,
      table: {
        ...game.table,
        players: {
          ...game.table.players,
          ...{ [playerId]: { ...game.table.players[playerId], hand: newHand } },
        },
      },
    }
  }
}
