import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { useMemo } from 'react'
import { DecoratorFunction } from 'storybook/internal/csf'
import { fn, spyOn } from 'storybook/test'

import { ActorContext } from '../src/ui/components/Game/ActorContext'
import { darkTheme, lightTheme } from '../src/ui/theme'

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
}

type ThemeParameters = Parameters<
  DecoratorFunction<
    ReactRenderer,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any
    }
  >
>

const withMuiTheme = (
  Story: ThemeParameters[0],
  context: ThemeParameters[1]
) => {
  // The theme global we just declared
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const themeKey: keyof typeof THEMES = context.globals.theme

  // Only recompute the theme if the themeKey changes
  const theme: Theme = useMemo(
    () => THEMES[themeKey] || THEMES['light'],
    [themeKey]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

const withActorContext = (Story: ThemeParameters[0]) => {
  // @ts-expect-error Irrelevant useActorRef return properties are omitted
  spyOn(ActorContext, 'useActorRef').mockReturnValue({
    send: fn().mockImplementation(console.log),
  })

  return (
    <ActorContext.Provider>
      <Story />
    </ActorContext.Provider>
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
        date: /Date$/,
      },
    },
  },

  decorators: [withMuiTheme, withActorContext],
}

export default preview
