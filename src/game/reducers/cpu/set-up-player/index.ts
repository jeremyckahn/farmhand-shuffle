import { randomNumber } from '../../../../services/RandomNumber'
import * as cards from '../../../cards'
import { IGame, IPlayer, isCropCard } from '../../../types'
import { assertIsCardId } from '../../../types/guards'
import { moveCropFromHandToField } from '../../move-crop-from-hand-to-field'

// TODO: Play more than one crop if possible
export const setUpCpuPlayer = (game: IGame, playerId: IPlayer['id']) => {
  const cropCardIdxsInPlayerHand = game.table.players[playerId].hand.reduce(
    (acc: number[], cardId, idx) => {
      assertIsCardId(cardId)

      const card = cards[cardId]

      if (isCropCard(card)) {
        acc = [...acc, idx]
      }

      return acc
    },
    []
  )

  const cropCardIdxToPlay = randomNumber.chooseElement(cropCardIdxsInPlayerHand)
  game = moveCropFromHandToField(game, playerId, cropCardIdxToPlay)

  return game
}
