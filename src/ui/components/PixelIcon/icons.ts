// Pixel art replacements for the @mui/icons-material icons the UI used. See
// types.ts for the pixel map format.
//
// Every map is 12x12, so at MUI's default icon size (24px) each art pixel
// is exactly 2 CSS pixels.

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

const circle = (holes: Record<number, string>): PixelMap =>
  [
    '...######...',
    '.##########.',
    '.##########.',
    '############',
    '############',
    '############',
    '############',
    '############',
    '############',
    '.##########.',
    '.##########.',
    '...######...',
  ].map((row, y) => holes[y] ?? row)

export const SuccessIcon = createPixelIcon(
  circle({
    3: '########..##',
    4: '#######..###',
    5: '##..##..####',
    6: '###....#####',
    7: '####..######',
  }),
  'Success'
)

export const InfoIcon = createPixelIcon(
  circle({
    2: '.####..####.',
    5: '#####..#####',
    6: '#####..#####',
    7: '#####..#####',
    8: '#####..#####',
    9: '.####..####.',
  }),
  'Info'
)

export const ErrorIcon = createPixelIcon(
  circle({
    2: '.####..####.',
    3: '#####..#####',
    4: '#####..#####',
    5: '#####..#####',
    6: '#####..#####',
    8: '#####..#####',
    9: '.####..####.',
  }),
  'Error'
)

export const WarningIcon = createPixelIcon(
  [
    '.....##.....',
    '.....##.....',
    '....####....',
    '....#..#....',
    '...##..##...',
    '...##..##...',
    '..###..###..',
    '..########..',
    '.####..####.',
    '.##########.',
    '############',
    '............',
  ],
  'Warning'
)
