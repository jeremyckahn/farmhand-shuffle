import { AlertProps } from '@mui/material/Alert'
import { createElement } from 'react'

import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons'

/**
 * Pixel art replacements for MUI's Alert severity icons, for an Alert's
 * `iconMapping` prop.
 */
export const alertIconMapping: NonNullable<AlertProps['iconMapping']> = {
  success: createElement(SuccessIcon, { fontSize: 'inherit' }),
  info: createElement(InfoIcon, { fontSize: 'inherit' }),
  warning: createElement(WarningIcon, { fontSize: 'inherit' }),
  error: createElement(ErrorIcon, { fontSize: 'inherit' }),
}

/**
 * The Alert icon size that keeps each art pixel of the 8x8 severity icons
 * exactly 3 CSS pixels (MUI's default is 22px).
 */
export const alertIconFontSize = 24
