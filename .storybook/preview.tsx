import React, { useMemo } from 'react'
import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { DecoratorFunction } from '@storybook/types'
import { fn, spyOn } from 'storybook/test'
import { ThemeProvider, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { lightTheme, darkTheme } from '../src/ui/theme'
import { ActorContext } from '../src/ui/components/Game/ActorContext'

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

const withMuiTheme = (
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

export const beforeEach = function beforeEach() {
  spyOn(console, 'log').mockName('console.log')
  spyOn(console, 'warn').mockName('console.warn')
  spyOn(console, 'error').mockName('console.error')
  spyOn(console, 'info').mockName('console.info')
  spyOn(console, 'debug').mockName('console.debug')
  spyOn(console, 'trace').mockName('console.trace')
  spyOn(console, 'count').mockName('console.count')
  spyOn(console, 'dir').mockName('console.dir')
  spyOn(console, 'assert').mockName('console.assert')
}
