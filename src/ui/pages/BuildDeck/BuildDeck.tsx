import { useNavigate } from 'react-router-dom'
import { useAsyncFn } from 'react-use'

import { DeserializedDeck, storage } from '../../../services/StorageService'
import { DeckBuilder } from '../../components/DeckBuilder'
import { useNotification } from '../../context/NotificationContext'
import { AppRoute } from '../../types'

export const BuildDeck = () => {
  const navigate = useNavigate()
  const { showNotification } = useNotification()

  const [state, saveDeck] = useAsyncFn(
    async (deck: DeserializedDeck) => {
      try {
        await storage.saveDeck(deck)

        showNotification('Deck saved successfully', 'success')
        void navigate(AppRoute.ROOT)
      } catch (e) {
        console.error(e)
        showNotification('Failed to save deck', 'error')
      }
    },
    [navigate, showNotification]
  )

  return <DeckBuilder onDone={saveDeck} isLoading={state.loading} />
}
