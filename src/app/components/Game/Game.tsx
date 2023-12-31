import Box, { BoxProps } from '@mui/material/Box'

import { IGame } from '../../../game/types'
import { Table } from '../Table/Table'

export interface GameProps extends BoxProps {
  game: IGame
}

export const Game = ({ game, ...rest }: GameProps) => {
  return (
    <Box {...rest}>
      <Table game={game} />
    </Box>
  )
}
