import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      color="error.main"
      p={3}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1">
        We encountered an error while loading the game. Please try refreshing the page.
      </Typography>
    </Box>
  )
}
