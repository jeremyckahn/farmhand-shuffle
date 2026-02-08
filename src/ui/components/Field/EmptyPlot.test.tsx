import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { MatchEvent, MatchState } from '../../../game/types'
import { stubMatch } from '../../../test-utils/stubs/match'
import * as useMatchStateModule from '../../hooks/useMatchRules'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { EmptyPlot } from './EmptyPlot'

const mockSend = vi.fn()

vi.mock('../Match/ActorContext', () => ({
  ActorContext: {
    useActorRef: () => ({
      send: mockSend,
    }),
  },
}))

describe('EmptyPlot', () => {
  const fieldIdx = 2
  const selectedHandCardIdx = 1

  const renderEmptyPlot = (matchState: MatchState, currentPlayerId: string) => {
    vi.spyOn(useMatchStateModule, 'useMatchRules').mockReturnValue({
      matchState,
      match: {
        ...stubMatch(),
        currentPlayerId,
        sessionOwnerPlayerId: stubPlayer1.id,
      },
    })

    return render(
      <StubShellContext selectedHandCardIdx={selectedHandCardIdx}>
        <EmptyPlot playerId={stubPlayer1.id} fieldIdx={fieldIdx} />
      </StubShellContext>
    )
  }

  test('renders empty plot', () => {
    const { container } = renderEmptyPlot(
      MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      stubPlayer1.id
    )

    // The Grid item is the top-level element
    const gridItem = container.firstChild

    expect(gridItem).toBeInTheDocument()
  })

  test('shows "Place card" when can be selected', () => {
    renderEmptyPlot(MatchState.CHOOSING_CARD_POSITION, stubPlayer1.id)

    expect(screen.getByText('Place card')).toBeInTheDocument()
  })

  test('calls actorRef.send when clicked and can be selected', () => {
    renderEmptyPlot(MatchState.CHOOSING_CARD_POSITION, stubPlayer1.id)

    const plotLabel = screen.getByText('Place card')
    const plot = plotLabel.parentElement

    if (!plot) throw new Error('Plot not found')

    fireEvent.click(plot)

    expect(mockSend).toHaveBeenCalledWith({
      type: MatchEvent.SELECT_CARD_POSITION,
      playerId: stubPlayer1.id,
      cardIdxInHand: selectedHandCardIdx,
      fieldIdxToPlace: fieldIdx,
    })
  })

  test('does not call actorRef.send when clicked and cannot be selected (wrong match state)', () => {
    mockSend.mockClear()
    const { container } = renderEmptyPlot(
      MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
      stubPlayer1.id
    )

    const gridItem = container.firstChild
    const plot = gridItem?.firstChild

    if (!plot) throw new Error('Plot not found')

    fireEvent.click(plot)

    expect(mockSend).not.toHaveBeenCalled()
  })

  test('does not call actorRef.send when clicked and cannot be selected (wrong player)', () => {
    mockSend.mockClear()
    const { container } = renderEmptyPlot(
      MatchState.CHOOSING_CARD_POSITION,
      stubPlayer2.id
    )

    const gridItem = container.firstChild
    const plot = gridItem?.firstChild

    if (!plot) throw new Error('Plot not found')

    fireEvent.click(plot)

    expect(mockSend).not.toHaveBeenCalled()
  })
})
