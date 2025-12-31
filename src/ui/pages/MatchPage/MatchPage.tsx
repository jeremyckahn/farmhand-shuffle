import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Suspense, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { CardInstance, IPlayerSeed } from '../../../game/types'
import { StorageService, storage } from '../../../services/StorageService'
import { stubDeck } from '../../../test-utils/stubs/deck'
import { Match } from '../../components/Match'

// Resource type definition
interface DeckResource {
  read: () => CardInstance[]
}

const createDeckResource = (): DeckResource => {
  let status: 'pending' | 'error' | 'success' = 'pending'
  let result: CardInstance[]
  let error: unknown

  const suspender = (async () => {
    try {
      const savedDeck = await storage.loadDeck()

      if (savedDeck) {
        result = StorageService.instantiateDeserializedDeck(savedDeck)
      } else {
        result = stubDeck()
      }
      status = 'success'
    } catch (e) {
      error = e
      status = 'error'
    }
  })()

  return {
    read() {
      if (status === 'pending') {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw suspender
      } else if (status === 'error') {
        throw error
      } else {
        return result
      }
    },
  }
}

const MatchPageContent = ({ resource }: { resource: DeckResource }) => {
  const deck = resource.read()

  // Generate IDs once per mount of content (safe if suspender resolves once)
  // Or memoize if deck reference is stable.
  // Since this component only renders when resource is ready, it is fine.
  // Ideally, useMemo here to avoid regenerating IDs on re-renders of this component
  // (though MatchPageContent probably won't re-render unless parent does).
  // But strictly, IDs should be stable for the match session.

  // We can just execute logic directly as render is synchronous here (after suspense).
  const player1Id = uuid()
  const player2Id = uuid()

  const player1: IPlayerSeed = {
    id: player1Id,
    deck,
  }

  const player2: IPlayerSeed = {
    id: player2Id,
    deck: stubDeck(),
  }

  const playerSeeds: IPlayerSeed[] = [player1, player2]
  const userPlayerId = player1Id

  return (
    <Match fullHeight playerSeeds={playerSeeds} userPlayerId={userPlayerId} />
  )
}

export const MatchPage = () => {
  // Lazily create the resource so it persists across renders but is unique to this component instance.
  // If MatchPage unmounts and remounts, a new resource is created (new fetch).
  const [resource] = useState(createDeckResource)

  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      }
    >
      <MatchPageContent resource={resource} />
    </Suspense>
  )
}
