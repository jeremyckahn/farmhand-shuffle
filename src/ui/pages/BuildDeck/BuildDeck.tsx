import { useNavigate } from 'react-router-dom'

import { storage } from '../../../services/StorageService'
import { DeckBuilder } from '../../components/DeckBuilder'

export const BuildDeck = () => {
  const navigate = useNavigate()

  return (
    <DeckBuilder
      onDone={deck => {
        // TODO: Change onDone to be async/Promise-based
        void (async () => {
          await storage.saveDeck(deck)
          void navigate('/')
          // TODO: Show a success notification
          // TODO: Handle errors
        })()
      }}
    />
  )
}
