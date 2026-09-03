import { ContainerProps } from '@mui/material'
import { ReactNode } from 'react'

import {
  BotState,
  IMatch,
  IPlayer,
  IPlayerSeed,
  MatchState,
} from '../../../game/types'

export interface MatchProps extends ContainerProps {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
  fullHeight?: boolean

  /**
   * Called exactly once when the match transitions into MatchState.GAME_OVER,
   * with the resulting winner's IPlayer['id'], or null if there was no
   * winner (e.g. a draw).
   */
  onMatchEnd?: (winnerId: IPlayer['id'] | null) => void

  /**
   * Renders arbitrary, always-visible content near TurnControl, e.g. a
   * wager/turn status badge. Match itself remains ignorant of what is
   * rendered here.
   */
  renderStatusBarContent?: () => ReactNode

  /**
   * Renders arbitrary content inside the GAME_OVER Dialog's DialogContent,
   * below the built-in "Winner: …" line, e.g. a payout/streak line.
   */
  renderGameOverContent?: (winnerId: IPlayer['id'] | null) => ReactNode

  /**
   * When true, Match omits its own built-in "Play again" button from the
   * GAME_OVER Dialog's DialogActions, leaving that row entirely to whatever
   * renderGameOverContent (or a sibling slot) supplies.
   */
  hideDefaultGameOverActions?: boolean

  /**
   * Called whenever the match transitions into one of the two "idle,
   * waiting on the human player" states (WAITING_FOR_PLAYER_SETUP_ACTION or
   * WAITING_FOR_PLAYER_TURN_ACTION) that are safe checkpoints to persist and
   * resume from later. Not called for any other, transient mid-action
   * state.
   */
  onCheckpoint?: (checkpoint: {
    matchState:
      | MatchState.WAITING_FOR_PLAYER_SETUP_ACTION
      | MatchState.WAITING_FOR_PLAYER_TURN_ACTION
    match: IMatch
    botState: BotState
  }) => void

  /**
   * When provided, resumes a previously-checkpointed match instead of
   * initializing a fresh one via playerSeeds.
   */
  initialMatch?: {
    matchState:
      | MatchState.WAITING_FOR_PLAYER_SETUP_ACTION
      | MatchState.WAITING_FOR_PLAYER_TURN_ACTION
    match: IMatch
    botState: BotState
  }

  /**
   * When true, always refers to the session owner as "You" and every other
   * player as "Opponent" instead of generating a name via funAnimalName.
   * Intended for embedding hosts (e.g. Farmhand) where the opponent is
   * always the same fixed bot and a generated animal name would be out of
   * place. Standalone usage (MatchPage) leaves this unset.
   */
  useGenericPlayerLabels?: boolean
}
