import { stubGame } from '../../../test-utils/stubs/game'
import { stubInteractionHandlers } from '../../../test-utils/stubs/interactionHandlers'
import { updatePlayer } from '../../reducers/update-player'
import { factory } from '../../services/Factory'
import { InvalidCardError } from '../../services/Rules/errors'
import { water } from '..'

import { handlePlayFromHand } from './handlePlayFromHand'

import { carrot } from '.'

const interactionHandlers = stubInteractionHandlers()

describe('handlePlayFromHand', () => {
  test('adds crop to field', async () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const playedCrop = factory.buildPlayedCrop(carrot)
    let newGame = updatePlayer(game, player1Id, { hand: [carrot.id] })

    newGame = await handlePlayFromHand(
      newGame,
      interactionHandlers,
      player1Id,
      0
    )

    expect(newGame.table.players[player1Id].field.crops).toEqual([playedCrop])
  })

  test('throws error if card lookup fails', async () => {
    const game = stubGame()
    const [player1Id] = Object.keys(game.table.players)
    const newGame = updatePlayer(game, player1Id, { hand: [water.id] })

    expect(async () => {
      await handlePlayFromHand(newGame, interactionHandlers, player1Id, 0)
    }).rejects.toThrow(InvalidCardError)
  })
})
