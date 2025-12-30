import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Suspense } from 'react'
import { v4 as uuid } from 'uuid'

import { instantiate } from '../../../game/cards'
import { CardInstance, IPlayerSeed } from '../../../game/types'
import { storage } from '../../../services/StorageService'
import { stubDeck } from '../../../test-utils/stubs/deck'
import { Match } from '../../components/Match'

// Simple Suspense resource implementation
let deckCache: {
  read: () => CardInstance[]
} | null = null

const createDeckResource = () => {
  let status: 'pending' | 'error' | 'success' = 'pending'
  let result: CardInstance[]
  let error: unknown

  const suspender = (async () => {
    try {
      const savedDeck = await storage.loadDeck()

      if (savedDeck) {
        // FIXME: Move this to a StorageService method called hydrateDeserializedDeck and add test coverage for it
        result = Array.from(savedDeck.entries()).reduce<CardInstance[]>(
          (acc, [card, count]) => {
            const newInstances = Array.from({ length: count }).map(() =>
              instantiate(card)
            ) as CardInstance[]

            return acc.concat(newInstances)
          },
          []
        )
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

const getDeckResource = () => {
  if (!deckCache) {
    deckCache = createDeckResource()
  }
  return deckCache
}

const MatchPageContent = () => {
  const deck = getDeckResource().read()

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
      <MatchPageContent />
    </Suspense>
  )
}
