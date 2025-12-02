import { ContainerProps } from '@mui/material'

import { IPlayerSeed } from '../../../game/types'

export interface MatchProps extends ContainerProps {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
  fullHeight?: boolean
}
