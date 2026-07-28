import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { MainMenu } from './MainMenu'

describe('MainMenu', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    )

    expect(screen.getByText('Farmhand Shuffle')).toBeInTheDocument()
    expect(screen.getByText('Play a match')).toBeInTheDocument()
    expect(screen.getByText('Build a deck')).toBeInTheDocument()
  })
})
