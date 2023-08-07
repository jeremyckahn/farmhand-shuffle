import { removeAt } from '../../../lib/array/removeAt'

import { Game, Player } from '../../types'

import { Factory } from '../Factory'

export class Rules {
  static processGameStart(): Game {
    const game = Factory.buildGame()

    // TODO: Set up player hands
    // TODO: Set up player decks

    return game
  }

  static processTurnStart(game: Game): Game {
    // TODO: Pay tax to community fund
    // TODO: Draw a card from the deck

    return game
  }

  static processTurnEnd(game: Game): Game {
    // TODO: Implement this
    return game
  }

  // FIXME: Test hand updating
  static playCardFromHand(
    game: Game,
    playerId: Player['id'],
    cardIdx: number
  ): Game {
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
