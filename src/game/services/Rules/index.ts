import { INITIAL_HAND_SIZE, STANDARD_TAX_AMOUNT } from '../../config'
import { drawCard } from '../../reducers/draw-card'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { moveFromHandToDiscardPile } from '../../reducers/move-from-hand-to-discard-pile'
import { updateTable } from '../../reducers/update-table'
import { IGame, IPlayer, IPlayerSeed } from '../../types'
import { Factory } from '../Factory'
import { payFromPlayerToCommunity } from '../../reducers/pay-from-player-to-community'
import { updateGame } from '../../reducers/update-game'
import { incrementPlayer } from '../../reducers/increment-player'
import { RandomNumber } from '../../../services/RandomNumber'
import { Lookup } from '../Lookup'

import { PlayerOutOfFundsError } from './errors'
import { InteractionHandlers } from './InteractionHandlers'

export class Rules {
  static processGameStart(playerSeeds: IPlayerSeed[]): IGame {
    let game = Factory.buildGame()

    for (const playerSeed of playerSeeds) {
      const player = Factory.buildPlayer({
        ...playerSeed,
        funds: Math.floor(game.table.communityFund / playerSeeds.length),
      })

      game.table.players[player.id] = player
      game = shuffleDeck(game, player.id)
      game = drawCard(game, player.id, INITIAL_HAND_SIZE)
    }

    game = updateTable(game, {
      communityFund: game.table.communityFund % playerSeeds.length,
    })

    const firstPlayerId = RandomNumber.chooseElement(
      Object.keys(game.table.players)
    )

    game = updateGame(game, { currentPlayerId: firstPlayerId })

    return game
  }

  static processTurnStart(game: IGame, playerId: IPlayer['id']): IGame {
    game = payFromPlayerToCommunity(game, STANDARD_TAX_AMOUNT, playerId)

    if (game.table.players[playerId].funds === 0) {
      throw new PlayerOutOfFundsError(playerId)
    }

    game = drawCard(game, playerId)

    return game
  }

  static processTurnEnd(game: IGame): IGame {
    game = incrementPlayer(game)

    return game
  }

  static async playCardFromHand(
    game: IGame,
    interactionHandlers: InteractionHandlers,
    playerId: IPlayer['id'],
    cardIdx: number
  ): Promise<IGame> {
    const card = Lookup.getCardFromHand(game, playerId, cardIdx)

    game = await card.onPlayFromHand(
      game,
      interactionHandlers,
      playerId,
      cardIdx
    )
    game = moveFromHandToDiscardPile(game, playerId, cardIdx)

    return game
  }
}
