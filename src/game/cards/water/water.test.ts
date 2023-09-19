import { stubGame } from '../../../test-utils/stubs/game'
import { updateField } from '../../reducers/update-field/index'
import { carrot, water } from '..'
import { Factory } from '../../services/Factory/index'
import { stubInteractionHandlers } from '../../../test-utils/stubs/interactionHandlers'

const game = stubGame()
const [player1Id] = Object.keys(game.table.players)
const interactionHandlers = stubInteractionHandlers()

describe('water', () => {
  describe('onPlayFromHand', () => {
    test('waters a selected crop when played', async () => {
      jest
        .spyOn(interactionHandlers, 'selectCropFromField')
        .mockReturnValue(Promise.resolve(0))

      const playedCrop = Factory.buildPlayedCrop(carrot)
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
      console.log('FIXME: Implement this.')
    })

    test('throws an error when there are no crops to water', async () => {
      console.log('FIXME: Implement this.')
    })
  })
})
