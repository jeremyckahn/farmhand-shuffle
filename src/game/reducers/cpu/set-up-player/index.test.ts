import { test } from 'vitest'

import { stubGame } from '../../../../test-utils/stubs/game'
import { stubPlayer1, stubPlayer2 } from '../../../../test-utils/stubs/players'
import { carrot, water } from '../../../cards'
import { INITIAL_HAND_SIZE } from '../../../config'
import { IPlayedCrop } from '../../../types'
import { updateGame } from '../../update-game'
import { updatePlayer } from '../../update-player'

import { setUpCpuPlayer } from '.'

describe('setUpCpuPlayer', () => {
  test('places a crop in the field', () => {
    let game = stubGame()

    game = updateGame(game, {
      sessionOwnerPlayerId: stubPlayer1.id,
      currentPlayerId: stubPlayer2.id,
    })

    const waterCardsInHand = new Array<string>(INITIAL_HAND_SIZE - 1).fill(
      water.id
    )

    game = updatePlayer(game, stubPlayer2.id, {
      hand: [...waterCardsInHand, carrot.id],
      field: {
        crops: [],
      },
    })

    game = setUpCpuPlayer(game, stubPlayer2.id)

    expect(game.table.players[stubPlayer2.id].field.crops).toEqual<
      IPlayedCrop[]
    >([{ id: carrot.id, waterCards: 0 }])
    expect(game.table.players[stubPlayer2.id].hand).toEqual(waterCardsInHand)
  })
})
