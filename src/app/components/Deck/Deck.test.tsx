import { render, screen, fireEvent } from '@testing-library/react'

import { stubGame } from '../../../test-utils/stubs/game'
import { DECK_SIZE } from '../../../game/config'
import { ActorContext } from '../Game/ActorContext'

import { Deck, DeckProps } from './Deck'

const game = stubGame()

const [player1Id, player2Id] = Object.keys(game.table.players)

const StubDeck = ({ ref, ...overrides }: Partial<DeckProps> = {}) => (
  <ActorContext.Provider>
    <Deck game={game} playerId={player1Id} {...overrides} />
  </ActorContext.Provider>
)

describe('Deck', () => {
  it('renders deck with correct number of cards', () => {
    render(<StubDeck />)
    const deck = screen.getByTestId(`deck_${player1Id}`)
    expect(deck.children).toHaveLength(DECK_SIZE)
  })

  it('rotates deck 180 degrees for non-session owner', () => {
    render(<StubDeck playerId={player2Id} />)
    const deck = screen.getByTestId(`deck_${player2Id}`)
    expect(deck).toHaveStyle({ transform: 'rotate(180deg)' })
  })

  it('calls handleClickTopCard when clicking the top card', () => {
    const handleClickTopCard = vi.fn()
    render(<StubDeck handleClickTopCard={handleClickTopCard} />)

    const deck = screen.getByTestId(`deck_${player1Id}`)
    const topCard = deck.lastChild as HTMLElement
    fireEvent.click(topCard)

    expect(handleClickTopCard).toHaveBeenCalled()
  })

  it('does not call handleClickTopCard when clicking a non-top card', () => {
    const handleClickTopCard = vi.fn()
    render(<StubDeck handleClickTopCard={handleClickTopCard} />)

    const deck = screen.getByTestId(`deck_${player1Id}`)
    const bottomCard = deck.firstChild as HTMLElement
    fireEvent.click(bottomCard)

    expect(handleClickTopCard).not.toHaveBeenCalled()
  })

  it('shows unflipped top card when selected', () => {
    render(<StubDeck isTopCardSelected />)
    const deck = screen.getByTestId(`deck_${player1Id}`)
    const topCard = deck.lastChild as HTMLElement

    expect(topCard).not.toHaveStyle({ transform: 'rotateY(180deg)' })
  })
})
