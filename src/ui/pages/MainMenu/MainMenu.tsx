import { Box, Button, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useNotification } from '../../context/NotificationContext'
import { isLocationStateWithNotification } from '../../type-guards'
import { AppRoute } from '../../types'

export const MainMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { showNotification } = useNotification()

  useEffect(() => {
    if (isLocationStateWithNotification(location.state)) {
      showNotification(location.state.notification, 'success')
      // Clear the location state so the notification doesn't reappear on refresh
      void navigate('.', { replace: true, state: {} })
    }
  }, [location.state, navigate, showNotification])

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
    </Box>
  )
}
