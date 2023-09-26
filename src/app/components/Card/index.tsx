import Paper from '@mui/material/Paper'
import useTheme from '@mui/material/styles/useTheme'

export const Card = () => {
  const theme = useTheme()

  return (
    <Paper
      sx={{ width: 300, height: 500, background: theme.palette.grey[200] }}
    ></Paper>
  )
}
