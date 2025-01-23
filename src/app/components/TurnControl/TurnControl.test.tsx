import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { carrot } from '../../../game/cards'
import { ActorContext } from '../Game/ActorContext'
import { stubGame } from '../../../test-utils/stubs/game'
import { updatePlayer } from '../../../game/reducers/update-player'
import { stubPlayer1 } from '../../../test-utils/stubs/players'
import { GameEvent, GameState } from '../../../game/types'

import { TurnControl } from './TurnControl'

const StubTurnControl = () => {
  return (
    <ActorContext.Provider>
      <TurnControl />
    </ActorContext.Provider>
  )
}

describe('TurnControl Component', () => {
  it('renders a button when in WAITING_FOR_PLAYER_SETUP_ACTION state and current player has crops', () => {
    const mockState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    render(<StubTurnControl />)

    expect(
      screen.getByRole('button', { name: /Complete setup/i })
    ).toBeInTheDocument()
  })

  it('does not render a button when in WAITING_FOR_PLAYER_SETUP_ACTION state but current player has no crops', () => {
    const mockState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    render(<StubTurnControl />)

    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('does not render a button when in an unhandled game state', () => {
    const mockState = GameState.UNINITIALIZED

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    render(<StubTurnControl />)

    // Check if the button is not rendered
    expect(
      screen.queryByRole('button', { name: /Complete setup/i })
    ).not.toBeInTheDocument()
  })

  it('calls handleCompleteSetup when Complete setup button is clicked', () => {
    const mockState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    const mockSend = vi.fn()

    // @ts-expect-error Irrelevant useActorRef return properties are omitted
    vi.spyOn(ActorContext, 'useActorRef').mockReturnValueOnce({
      send: mockSend,
    })

    render(<StubTurnControl />)

    const button = screen.getByRole('button', { name: /Complete setup/i })
    fireEvent.click(button)

    expect(mockSend).toHaveBeenCalledWith({
      type: GameEvent.PROMPT_PLAYER_FOR_SETUP,
    })
  })

  it('renders a closed accordion when no control button is present', () => {
    const mockState = GameState.UNINITIALIZED

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    render(<StubTurnControl />)

    // Assert that the accordion is not expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders an expanded accordion when a control button is present', () => {
    const mockState = GameState.WAITING_FOR_PLAYER_SETUP_ACTION

    let mockGame = stubGame()
    mockGame = updatePlayer(mockGame, stubPlayer1.id, {
      field: { crops: [{ id: carrot.id, waterCards: 0 }] },
    })

    vi.spyOn(ActorContext, 'useSelector').mockReturnValue([mockState, mockGame])

    render(<StubTurnControl />)

    // Assert that the accordion is expanded
    expect(
      screen.getByRole('button', { name: /game state:/i })
    ).toHaveAttribute('aria-expanded', 'true')
  })
})
