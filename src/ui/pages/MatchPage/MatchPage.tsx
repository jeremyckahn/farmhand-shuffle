import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useEffect, useMemo } from 'react'
import { useAsyncFn } from 'react-use'
import { v4 as uuid } from 'uuid'

import { instantiate } from '../../../game/cards'
import { CardInstance, IPlayerSeed } from '../../../game/types'
import { storage } from '../../../services/StorageService'
import { stubDeck } from '../../../test-utils/stubs/deck'
import { Match } from '../../components/Match'

export const MatchPage = () => {
  const [state, loadDeck] = useAsyncFn(async () => {
    const savedDeck = await storage.loadDeck()

    if (savedDeck) {
      const deckInstances: CardInstance[] = []
      for (const [card, count] of savedDeck.entries()) {
        for (let i = 0; i < count; i++) {
          // Cast card to any to satisfy the CardInstance union requirement,
          // assuming the stored card definitions (from allCards) are complete.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          deckInstances.push(instantiate(card as any) as CardInstance)
        }
      }
      return deckInstances
    }

    return stubDeck()
  }, [])

  useEffect(() => {
    loadDeck()
  }, [loadDeck])

  // Memoize player IDs and seeds to prevent re-creation on renders unless data changes
  const { playerSeeds, userPlayerId } = useMemo(() => {
    if (!state.value) {
      return { playerSeeds: [], userPlayerId: '' }
    }

    const player1Id = uuid()
    const player2Id = uuid()

    const player1: IPlayerSeed = {
      id: player1Id,
      deck: state.value,
    }

    const player2: IPlayerSeed = {
      id: player2Id,
      deck: stubDeck(),
    }

    return {
      playerSeeds: [player1, player2],
      userPlayerId: player1Id,
    }
  }, [state.value])

  if (state.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    )
  }

  if (state.error) {
    throw state.error
  }

  // Ensure we have data before rendering Match
  if (!state.value) {
    return null
  }

  return (
    <Match fullHeight playerSeeds={playerSeeds} userPlayerId={userPlayerId} />
  )
}
