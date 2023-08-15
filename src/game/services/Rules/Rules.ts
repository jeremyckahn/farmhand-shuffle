import { removeAt } from '../../../lib/array/removeAt'
import { initialHandSize } from '../../config'
import { drawCard } from '../../reducers/draw-card'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { updateHand } from '../../reducers/update-hand'

import { IGame, IPlayer, IPlayerSeed } from '../../types'

import { Factory } from '../Factory'

export class Rules {
  static processGameStart(playerSeeds: IPlayerSeed[]): IGame {
    let game = Factory.buildGame()

    for (const playerSeed of playerSeeds) {
      const player = { ...Factory.buildPlayer(), ...playerSeed }
      game.table.players[player.id] = player
      game = shuffleDeck(game, player.id)
      game = drawCard(game, player.id, initialHandSize)
    }

    // TODO: Set up player decks
    // TODO: Shuffle player decks

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

    game = updateHand(game, playerId, newHand)

    return game
  }
}
