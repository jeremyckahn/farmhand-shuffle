import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

// NOTE: This is the single source of truth for the "mobile/narrow viewport"
// breakpoint. Table.tsx, CardCore.tsx, and Match.tsx all need to agree on
// exactly the same threshold -- CardSize.COMPACT is decided at this
// breakpoint, and CardCore's action-button stacking has to switch at
// exactly the same width or it renders full-size buttons beside a
// COMPACT-sized card with no room for them.
export const useIsNarrowViewport = () => {
  const theme = useTheme()

  return useMediaQuery(theme.breakpoints.down('md'))
}
