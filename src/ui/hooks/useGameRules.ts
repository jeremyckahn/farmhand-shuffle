import { assertStringIsGameState } from '../../game/types/guards'
import { ActorContext } from '../components/Game/ActorContext'

export const useGameRules = () => {
  const { game, gameState, selectedWaterCardInHandIdx } =
    ActorContext.useSelector(
      ({ context: { game, selectedWaterCardInHandIdx }, value }) => ({
        game,
        gameState: value,
        selectedWaterCardInHandIdx,
      })
    )

  if (typeof gameState !== 'string') {
    throw new TypeError(`Actor state is not a string`)
  }

  assertStringIsGameState(gameState)

  return { game, gameState, selectedWaterCardInHandIdx }
}
