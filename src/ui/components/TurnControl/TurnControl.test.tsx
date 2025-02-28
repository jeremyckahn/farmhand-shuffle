import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { carrot } from '../../../game/cards'
import { updateGame } from '../../../game/reducers/update-game'
import { updatePlayer } from '../../../game/reducers/update-player'
import { RulesService } from '../../../game/services/Rules'
import { GameEvent, GameState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'
import { stubGame } from '../../../test-utils/stubs/game'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import * as useGameRulesModule from '../../hooks/useGameRules'
import { ActorContext } from '../Game/ActorContext'

import { TurnControl, TurnControlProps } from './TurnControl'

const StubTurnControl = (overrides: Partial<TurnControlProps>) => {
  return (
    <ActorContext.Provider>
      <TurnControl game={stubGame()} {...overrides} />
    </ActorContext.Provider>
  )
}

describe('TurnControl Component', () => {
  it('renders a "Complete setup" button when in WAITING_FOR_PLAYER_SETUP_ACTION state and current player has crops', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.getByRole('button', { name: /Complete setup/i })
    ).toBeInTheDocument()
  })

  it('renders an "End turn" button when it is the current player turn', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_TURN_ACTION

    let game = stubGame()
    game = updateGame(game, { currentPlayerId: game.sessionOwnerPlayerId })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.getByRole('button', { name: /End turn/i })
    ).toBeInTheDocument()
  })

  it('does not render a button when in WAITING_FOR_PLAYER_SETUP_ACTION state but current player has no crops', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('does not render a button when in an unhandled game state', () => {
    const gameState = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    // Check if the button is not rendered
    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('handles completing player setup', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    const send = mockSend()

    render(<StubTurnControl game={game} />)

    const button = screen.getByRole('button', { name: /Complete setup/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION,
    })
  })

  it('handles ending the player turn', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_TURN_ACTION

    let game = stubGame()
    game = updateGame(game, { currentPlayerId: game.sessionOwnerPlayerId })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    const send = mockSend()

    render(<StubTurnControl game={game} />)

    const button = screen.getByRole('button', { name: /End turn/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: GameEvent.START_TURN,
    })
  })

  it('renders a closed accordion when no control button is present', () => {
    const gameState = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is not expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders an expanded accordion when a control button is present', () => {
    const gameState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: {
        crops: [{ id: carrot.id, wasWateredTuringTurn: false, waterCards: 0 }],
      },
    })

    vi.spyOn(useGameRulesModule, 'useGameRules').mockReturnValue({
      gameState,
      game,
      selectedWaterCardInHandIdx:
        RulesService.defaultSelectedWaterCardInHandIdx,
    })

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'true')
  })
})
