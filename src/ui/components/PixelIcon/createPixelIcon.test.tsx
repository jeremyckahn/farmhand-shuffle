import Tooltip from '@mui/material/Tooltip'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { createPixelIcon, flipX, flipY, rotate } from './createPixelIcon'

const TestIcon = createPixelIcon(['#.', '+#'], 'Test')

describe('createPixelIcon', () => {
  test('renders an SvgIcon with a test id derived from its name', () => {
    render(<TestIcon />)

    const icon = screen.getByTestId('TestIcon')

    expect(icon.tagName.toLowerCase()).toBe('svg')
    expect(icon).toHaveAttribute('viewBox', '0 0 2 2')
  })

  test('draws solid and half-tone pixels as separate paths', () => {
    render(<TestIcon />)

    const paths = screen.getByTestId('TestIcon').querySelectorAll('path')

    expect([...paths].map(path => path.getAttribute('d'))).toEqual([
      'M0 1h1v1h-1z',
      'M0 0h1v1h-1zM1 1h1v1h-1z',
    ])
  })

  test('merges horizontal runs of pixels into one rectangle', () => {
    const RunIcon = createPixelIcon(['.###.'], 'Run')

    render(<RunIcon />)

    const path = screen.getByTestId('RunIcon').querySelector('path')

    expect(path).toHaveAttribute('d', 'M1 0h3v1h-3z')
  })

  test('forwards refs to the underlying svg element', () => {
    const ref = createRef<SVGSVGElement>()

    render(<TestIcon ref={ref} />)

    expect(ref.current).toBe(screen.getByTestId('TestIcon'))
  })

  test('can be the direct child of a Tooltip', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <Tooltip title="Tip">
        <TestIcon />
      </Tooltip>
    )

    // NOTE: Tooltip anchors to its child via a ref; without forwardRef React
    // warns that function components cannot be given refs.
    expect(consoleError).not.toHaveBeenCalled()
    consoleError.mockRestore()
  })
})

describe('pixel map transforms', () => {
  const pixelMap = ['ab', 'cd']

  test('flipX mirrors horizontally', () => {
    expect(flipX(pixelMap)).toEqual(['ba', 'dc'])
  })

  test('flipY mirrors vertically', () => {
    expect(flipY(pixelMap)).toEqual(['cd', 'ab'])
  })

  test('rotate turns the map 90 degrees clockwise', () => {
    expect(rotate(pixelMap)).toEqual(['ca', 'db'])
  })
})
