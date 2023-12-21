import Box, { BoxProps } from '@mui/material/Box'

export interface TableProps extends BoxProps {}

export const Table = ({ ...rest }: TableProps) => {
  return <Box {...rest}></Box>
}
