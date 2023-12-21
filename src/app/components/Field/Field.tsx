import Box, { BoxProps } from '@mui/material/Box'

export interface FieldProps extends BoxProps {}

export const Field = ({ ...rest }: FieldProps) => {
  return <Box {...rest}></Box>
}
