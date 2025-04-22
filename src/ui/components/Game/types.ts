import { ContainerProps } from '@mui/material'

import { IPlayerSeed } from '../../../game/types'

export interface GameProps extends ContainerProps {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
}
