// Pixel art replacements for the @mui/icons-material icons the UI used. See
// types.ts for the pixel map format.
//
// Most maps are 12x12, so at MUI's default icon size (24px) each art pixel
// is exactly 2 CSS pixels. The Alert severity icons are 8x8 (see below).

import { createPixelIcon, flipX, flipY, rotate } from './createPixelIcon'
import { PixelMap } from './types'

const chevronDown: PixelMap = [
  '............',
  '............',
  '............',
  '.##......##.',
  '.###....###.',
  '..###..###..',
  '...######...',
  '....####....',
  '.....##.....',
  '............',
  '............',
  '............',
]

const chevronLeft = rotate(chevronDown)

export const KeyboardArrowDownIcon = createPixelIcon(
  chevronDown,
  'KeyboardArrowDown'
)
export const KeyboardArrowUpIcon = createPixelIcon(
  flipY(chevronDown),
  'KeyboardArrowUp'
)
export const ChevronLeftIcon = createPixelIcon(chevronLeft, 'ChevronLeft')
export const ChevronRightIcon = createPixelIcon(
  flipX(chevronLeft),
  'ChevronRight'
)

export const AddIcon = createPixelIcon(
  [
    '............',
    '.....##.....',
    '.....##.....',
    '.....##.....',
    '.....##.....',
    '.##########.',
    '.##########.',
    '.....##.....',
    '.....##.....',
    '.....##.....',
    '.....##.....',
    '............',
  ],
  'Add'
)

export const RemoveIcon = createPixelIcon(
  [
    '............',
    '............',
    '............',
    '............',
    '............',
    '.##########.',
    '.##########.',
    '............',
    '............',
    '............',
    '............',
    '............',
  ],
  'Remove'
)

export const AttachMoneyIcon = createPixelIcon(
  [
    '.....##.....',
    '...######...',
    '..##.##.##..',
    '..##.##.....',
    '..##.##.....',
    '...######...',
    '.....##.##..',
    '.....##.##..',
    '..##.##.##..',
    '...######...',
    '.....##.....',
    '............',
  ],
  'AttachMoney'
)

export const AccountBalanceIcon = createPixelIcon(
  [
    '.....##.....',
    '...######...',
    '.##########.',
    '############',
    '............',
    '.##..##..##.',
    '.##..##..##.',
    '.##..##..##.',
    '.##..##..##.',
    '.##########.',
    '############',
    '############',
  ],
  'AccountBalance'
)

// The Alert severity icons are drawn on a coarser 8x8 grid. Alerts render
// their icon at 24px, so each art pixel is exactly 3 CSS pixels, matching
// PIXEL_SIZE (see src/lib/styling/pixel.ts) and the frame around the alert.
const alertCircle = (holes: Record<number, string>): PixelMap =>
  [
    '..####..',
    '.######.',
    '########',
    '########',
    '########',
    '########',
    '.######.',
    '..####..',
  ].map((row, y) => holes[y] ?? row)

export const SuccessIcon = createPixelIcon(
  alertCircle({
    2: '######.#',
    3: '#####.##',
    4: '#.##.###',
    5: '##..####',
  }),
  'Success'
)

export const InfoIcon = createPixelIcon(
  alertCircle({
    1: '.##..##.',
    3: '###..###',
    4: '###..###',
    5: '###..###',
    6: '.##..##.',
  }),
  'Info'
)

export const ErrorIcon = createPixelIcon(
  alertCircle({
    1: '.##..##.',
    2: '###..###',
    3: '###..###',
    4: '###..###',
    6: '.##..##.',
  }),
  'Error'
)

export const WarningIcon = createPixelIcon(
  [
    '...##...',
    '..####..',
    '..#..#..',
    '.##..##.',
    '.##..##.',
    '########',
    '###..###',
    '########',
  ],
  'Warning'
)
