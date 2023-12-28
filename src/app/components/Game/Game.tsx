import Box, { BoxProps } from '@mui/material/Box'

export interface GameProps extends BoxProps {}

export const Game = ({ ...rest }: GameProps) => {
  return <Box {...rest}></Box>
}
