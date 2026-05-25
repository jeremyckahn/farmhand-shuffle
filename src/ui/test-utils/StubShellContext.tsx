import { ReactNode, useMemo, useState } from 'react'

import { Mock } from 'vitest'

import {
  ShellContext,
  ShellContextProps,
} from '../components/Match/ShellContext'
import { deselectedHandIdx } from '../components/constants'

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
  const [selectedHandCardIdx, setSelectedHandCardIdx] =
    useState(deselectedHandIdx)

  const setIsHandInViewport = useMemo(
    () => (useVitestMocks ? vi.fn() : () => {}),
    [useVitestMocks]
  )

  const contextValue: ShellContextProps = useMemo(
    () => ({
      blockingOperation: useVitestMocks ? vi.fn() : () => Promise.resolve(),
      isHandInViewport: true,
      setIsHandInViewport,
      showNotification: mockShowNotification,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
      ...overrides,
    }),
    [
      overrides,
      useVitestMocks,
      selectedHandCardIdx,
      setSelectedHandCardIdx,
      setIsHandInViewport,
    ]
  )

  return (
    <ShellContext.Provider value={contextValue}>
      {children}
    </ShellContext.Provider>
  )
}
