import { useNavigate } from 'react-router-dom'
import { useAsyncFn } from 'react-use'
import Box from '@mui/material/Box'

import { DeserializedDeck, storage } from '../../../services/StorageService'
import { DeckBuilder } from '../../components/DeckBuilder'
import { Snackbar, useSnackbarState } from '../../components/Snackbar'

export const BuildDeck = () => {
  const navigate = useNavigate()
  const { showNotification, snackbarProps } = useSnackbarState()

  const [state, saveDeck] = useAsyncFn(
    async (deck: DeserializedDeck) => {
      try {
        await storage.saveDeck(deck)
        showNotification('Deck saved successfully', 'success')
        void navigate('/')
      } catch (error) {
        showNotification(
          error instanceof Error ? error.message : 'Failed to save deck',
          'error'
        )
      }
    },
    [navigate, showNotification]
  )

  return (
    <Box sx={{ height: '100%' }}>
      <DeckBuilder onDone={saveDeck} isLoading={state.loading} />
      <Snackbar {...snackbarProps} />
    </Box>
  )
}
