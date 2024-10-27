import React, { useMemo } from 'react'
import type { Preview, ReactRenderer } from '@storybook/react'
import { DecoratorFunction } from '@storybook/types'
import { themes } from '@storybook/theming'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { lightTheme, darkTheme } from '../src/app/theme'
import { SelectedCardContext } from '../src/app/contexts/SelectedCard'

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
}

type ThemeParameters = Parameters<
  DecoratorFunction<
    ReactRenderer,
    {
      [x: string]: any
    }
  >
>

export const withMuiTheme = (
  Story: ThemeParameters[0],
  context: ThemeParameters[1]
) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals

  // Only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

// Create a new decorator for SelectedCardContext
const withSelectedCardContext: DecoratorFunction<ReactRenderer> = Story => {
  return (
    <SelectedCardContext>
      <Story />
    </SelectedCardContext>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [withMuiTheme, withSelectedCardContext],
}

export default preview

export const parameters = {
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' },
  },
}
