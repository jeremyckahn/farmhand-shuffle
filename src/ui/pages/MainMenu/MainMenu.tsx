import { Box, Button, Stack, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Snackbar } from '../../components/Snackbar'
import { AppRoute } from '../../types'

export const MainMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Extract the notification from location state, if any.
  // We use `as { notification?: string } | null` because state is loosely typed.
  const state = location.state as { notification?: string } | null
  const initialNotification = state?.notification ?? ''

  const [notificationMessage, setNotificationMessage] =
    useState(initialNotification)

  const handleSnackbarClose = useCallback(() => {
    setNotificationMessage('')

    // Clear the location state so the notification doesn't reappear on refresh
    void navigate('.', { replace: true, state: {} })
  }, [navigate])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography variant="h1" component="h1">
          Farmhand Shuffle
        </Typography>
        <Stack spacing={2}>
          <Button
            component={Link}
            to={AppRoute.MATCH}
            variant="contained"
            size="large"
          >
            Play a match
          </Button>
          <Button
            component={Link}
            to={AppRoute.BUILD_DECK}
            variant="outlined"
            size="large"
          >
            Build a deck
          </Button>
        </Stack>
      </Stack>
      {notificationMessage && (
        <Snackbar
          message={notificationMessage}
          severity="success"
          onClose={handleSnackbarClose}
        />
      )}
    </Box>
  )
}
