import Box, { BoxProps } from '@mui/material/Box'

export interface TableProps extends BoxProps {}

export const Table = ({ ...rest }: TableProps) => {
  // FIXME: Render player deck
  // FIXME: Render player hand
  // FIXME: Render player discard pile
  // FIXME: Render player field
  return <Box {...rest}></Box>
}
