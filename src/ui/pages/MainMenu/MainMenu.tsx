import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { AppRoute } from '../../types'

export const MainMenu = () => {
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
