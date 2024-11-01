import { stubGame } from '../../../test-utils/stubs/game'
import { updateField } from '../../reducers/update-field'
import { factory } from '../../services/Factory'
import { stubInteractionHandlers } from '../../../test-utils/stubs/interactionHandlers'
import { FieldEmptyError, PlayerAbortError } from '../../services/Rules/errors'
import { carrot, water } from '..'

const game = stubGame()
const [player1Id] = Object.keys(game.table.players)
const interactionHandlers = stubInteractionHandlers()

describe('water', () => {
  describe('onPlayFromHand', () => {
    test('waters a selected crop when played', async () => {
      vitest
        .spyOn(interactionHandlers, 'selectCropFromField')
        .mockReturnValue(Promise.resolve(0))

      const playedCrop = factory.buildPlayedCrop(carrot)
      let newGame = updateField(game, player1Id, { crops: [playedCrop] })
      newGame = await water.onPlayFromHand(
        newGame,
        interactionHandlers,
        player1Id,
        0
      )

      expect(
        newGame.table.players[player1Id].field.crops[0].waterCards
      ).toEqual(1)
    })

    test('throws an error when the player cancels selection', async () => {
      vitest
        .spyOn(interactionHandlers, 'selectCropFromField')
        .mockImplementation(async () => {
          throw new PlayerAbortError()
        })

      const playedCrop = factory.buildPlayedCrop(carrot)
      const newGame = updateField(game, player1Id, { crops: [playedCrop] })

      expect(async () => {
        await water.onPlayFromHand(newGame, interactionHandlers, player1Id, 0)
      }).rejects.toThrow(PlayerAbortError)
    })

    test('throws an error when there are no crops to water', async () => {
      vitest
        .spyOn(interactionHandlers, 'selectCropFromField')
        .mockReturnValue(Promise.resolve(0))

      expect(async () => {
        await water.onPlayFromHand(game, interactionHandlers, player1Id, 0)
      }).rejects.toThrow(FieldEmptyError)
    })
  })
})
