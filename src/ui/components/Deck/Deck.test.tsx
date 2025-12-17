import { render, screen, fireEvent } from '@testing-library/react'

import { stubMatch } from '../../../test-utils/stubs/match'
import { DECK_SIZE } from '../../../game/config'
import { ActorContext } from '../Match/ActorContext'

import { Deck, DeckProps } from './Deck'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Card: ({ cardInstance, cardIdx, playerId, isFlipped, ...rest }: any) => (
    <div {...rest} />
  ),
}))

const match = stubMatch()

const [player1Id, player2Id] = Object.keys(match.table.players)

if (!player1Id || !player2Id) {
  throw new Error('Players not found')
}

const StubDeck = ({ ref, ...overrides }: Partial<DeckProps> = {}) => (
  <ActorContext.Provider>
    <Deck match={match} playerId={player1Id} {...overrides} />
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
