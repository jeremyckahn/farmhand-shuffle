import { Match } from '../../components/Match'

import { MatchPageProps } from './types'

export const MatchPage = ({ playerSeeds, userPlayerId }: MatchPageProps) => {
  return (
    <Match
      fullHeight
      playerSeeds={playerSeeds}
      userPlayerId={userPlayerId}
    />
  )
}
