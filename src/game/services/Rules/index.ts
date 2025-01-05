import { INITIAL_HAND_SIZE, STANDARD_TAX_AMOUNT } from '../../config'
import { drawCard } from '../../reducers/draw-card'
import { shuffleDeck } from '../../reducers/shuffle-deck'
import { moveFromHandToDiscardPile } from '../../reducers/move-from-hand-to-discard-pile'
import { updateTable } from '../../reducers/update-table'
import { CardType, IGame, IPlayer, IPlayerSeed } from '../../types'
import { factory } from '../Factory'
import { payFromPlayerToCommunity } from '../../reducers/pay-from-player-to-community'
import { updateGame } from '../../reducers/update-game'
import { incrementPlayer } from '../../reducers/increment-player'
import { randomNumber } from '../../../services/RandomNumber'
import { lookup } from '../Lookup'

import { moveCropFromHandToField } from '../../reducers/move-crop-from-hand-to-field'

import { PlayerOutOfCropsError, PlayerOutOfFundsError } from './errors'
import { InteractionHandlers } from './InteractionHandlers'

export class RulesService {
  static readonly unselectedCardIdx = -1

  initializeGame(
    playerSeeds: IPlayerSeed[],
    userPlayerId: string | undefined = playerSeeds[0]?.id
  ): IGame {
    let game = factory.buildGame({}, userPlayerId)

    for (const playerSeed of playerSeeds) {
      const player = factory.buildPlayer({
        ...playerSeed,
        funds: Math.floor(game.table.communityFund / playerSeeds.length),
      })

      game = updateTable(game, {
        players: { ...game.table.players, [player.id]: player },
      })
      game = shuffleDeck(game, player.id)
      game = drawCard(game, player.id, INITIAL_HAND_SIZE)
    }

    game = updateTable(game, {
      communityFund: game.table.communityFund % playerSeeds.length,
    })

    const firstPlayerId = randomNumber.chooseElement(
      Object.keys(game.table.players)
    )

    game = updateGame(game, { currentPlayerId: firstPlayerId })

    return game
  }

  processTurnStart(game: IGame, playerId: IPlayer['id']): IGame {
    game = payFromPlayerToCommunity(game, STANDARD_TAX_AMOUNT, playerId)

    if (game.table.players[playerId].funds === 0) {
      throw new PlayerOutOfFundsError(playerId)
    }

    game = drawCard(game, playerId)

    return game
  }

  processTurnEnd(game: IGame): IGame {
    game = incrementPlayer(game)

    return game
  }

  /**
   * @throws A custom error that describes why the card could not be played. If
   * this occurs, the player should be instructed how to proceed.
   */
  async playCardFromHand(
    game: IGame,
    interactionHandlers: InteractionHandlers,
    playerId: IPlayer['id'],
    cardIdx: number
  ): Promise<IGame> {
    const card = lookup.getCardFromHand(game, playerId, cardIdx)

    game = await card.onPlayFromHand(
      game,
      interactionHandlers,
      playerId,
      cardIdx
    )

    game = moveFromHandToDiscardPile(game, playerId, cardIdx)

    return game
  }

  async setUpField(
    game: IGame,
    interactionHandlers: InteractionHandlers,
    playerId: IPlayer['id']
  ) {
    let cropCardHandIdx = RulesService.unselectedCardIdx

    while (true) {
      cropCardHandIdx = await interactionHandlers.selectCardFromHand(
        game,
        playerId,
        CardType.CROP
      )

      if (cropCardHandIdx === RulesService.unselectedCardIdx) {
        if (game.table.players[playerId].deck.length === 0) {
          throw new PlayerOutOfCropsError(playerId)
        }

        game = drawCard(game, playerId)
      } else {
        break
      }
    }

    game = moveCropFromHandToField(game, playerId, cropCardHandIdx)

    return game
  }
}

export const rules = new RulesService()
