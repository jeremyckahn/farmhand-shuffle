import { useNavigate } from 'react-router-dom'
import { useAsyncFn } from 'react-use'

import { DeserializedDeck, storage } from '../../../services/StorageService'
import { DeckBuilder } from '../../components/DeckBuilder'

export const BuildDeck = () => {
  const navigate = useNavigate()

  const [state, saveDeck] = useAsyncFn(
    async (deck: DeserializedDeck) => {
      await storage.saveDeck(deck)
      void navigate('/', { state: { notification: 'Deck saved successfully' } })
      // TODO: Handle errors
    },
    [navigate]
  )

  return <DeckBuilder onDone={saveDeck} isLoading={state.loading} />
}
