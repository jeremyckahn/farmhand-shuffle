import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { carrot } from '../../../game/cards'
import { ActorContext } from '../Game/ActorContext'
import { stubGame } from '../../../test-utils/stubs/game'
import { updatePlayer } from '../../../game/reducers/update-player'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { GameEvent, GameState } from '../../../game/types'
import { mockSend } from '../../../test-utils/mocks/send'

import { TurnControl, TurnControlProps } from './TurnControl'

const StubTurnControl = (overrides: Partial<TurnControlProps>) => {
  return (
    <ActorContext.Provider>
      <TurnControl game={stubGame()} {...overrides} />
    </ActorContext.Provider>
  )
}

describe('TurnControl Component', () => {
  it('renders a button when in WAITING_FOR_PLAYER_SETUP_ACTION state and current player has crops', () => {
    const state = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    render(<StubTurnControl game={game} />)

    expect(
      screen.getByRole('button', { name: /Complete setup/i })
    ).toBeInTheDocument()
  })

  it('does not render a button when in WAITING_FOR_PLAYER_SETUP_ACTION state but current player has no crops', () => {
    const state = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    render(<StubTurnControl game={game} />)

    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('does not render a button when in an unhandled game state', () => {
    const state = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    render(<StubTurnControl game={game} />)

    // Check if the button is not rendered
    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('calls handleCompleteSetup when "Complete setup" button is clicked', () => {
    const state = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    const send = mockSend()

    render(<StubTurnControl game={game} />)

    const button = screen.getByRole('button', { name: /Complete setup/i })
    fireEvent.click(button)

    expect(send).toHaveBeenCalledWith({
      type: GameEvent.PROMPT_PLAYER_FOR_SETUP,
    })
  })

  it('renders a closed accordion when no control button is present', () => {
    const state = GameState.UNINITIALIZED

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is not expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders an expanded accordion when a control button is present', () => {
    const state = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let game = stubGame()
    game = updatePlayer(game, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue(state)

    render(<StubTurnControl game={game} />)

    // Assert that the accordion is expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'true')
  })
})
