import { SxProps } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'

// NOTE: This is a workaround for unhelpful TypeScript behavior that conflicts
// with MUI idioms.
// See: https://github.com/mui/material-ui/issues/37730#issuecomment-2218304523
export const isSxArray = (
  sx: SxProps<Theme>
): sx is ReadonlyArray<
  | boolean
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)
> => {
  return Array.isArray(sx)
}
