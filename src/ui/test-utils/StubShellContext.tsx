import { ReactNode, useMemo } from 'react'

import { Mock } from 'vitest'

import {
  ShellContext,
  ShellContextProps,
} from '../components/Game/ShellContext'

import { isStorybook } from './isStorybook'

export const mockShowNotification =
  typeof vi === 'undefined' ? () => {} : vi.fn()

export const StubShellContext = ({
  children,
  // NOTE: isStorybook MUST be cast with Boolean() as part of a workaround for
  // this issue:
  // https://github.com/storybookjs/builder-vite/issues/570#issuecomment-1824504498
  /**
   * This needs to be set to false when used in Storybook stories.
   */
  useVitestMocks = !isStorybook,
  ...overrides
}: {
  children: ReactNode
  useVitestMocks?: boolean
  mockImplementation?: Mock
} & Partial<ShellContextProps>) => {
  const contextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation: useVitestMocks ? vi.fn() : () => Promise.resolve(),
      isHandInViewport: true,
      setIsHandInViewport: useVitestMocks ? vi.fn() : () => {},
      showNotification: mockShowNotification,
      ...overrides,
    }),
    [overrides, useVitestMocks]
  )

  return (
    <ShellContext.Provider value={contextValue}>
      {children}
    </ShellContext.Provider>
  )
}
