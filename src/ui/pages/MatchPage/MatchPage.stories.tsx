import type { Meta, StoryObj } from '@storybook/react'
import { v4 as uuid } from 'uuid'

import { carrot, instantiate } from '../../../game/cards'
import { CardInstance } from '../../../game/types'
import { storage } from '../../../services/StorageService'
import { stubDeck } from '../../../test-utils/stubs/deck'
import { MatchPage } from './MatchPage'

// Mock the Match component since we don't want to render the full game in the page story,
// or we can let it render if we want to see it.
// For the purpose of the story, let's mock the Match component to simplify.
// Actually, stories usually show the real thing. But Match might be heavy.
// Let's rely on the real Match but mock the data loading via StorageService override/mocking if possible.
// Since StorageService is a singleton, it's hard to mock in Storybook without a decorator or valid data.
// However, the component calls `storage.loadDeck()`.
// We can use `parameters` to perhaps influence behavior if we had a dependency injection system,
// but here we have a direct import.
// A common workaround in Storybook for singletons is to mock them globally or patch them in the story.

const meta: Meta<typeof MatchPage> = {
  title: 'Pages/MatchPage',
  component: MatchPage,
}

export default meta
type Story = StoryObj<typeof MatchPage>

// We can't easily mock the storage singleton here without side effects on other stories.
// But we can try to patch it and restore it.
// Or we can rely on the fact that localforage might be empty, so it falls back to stubDeck.

export const Default: Story = {
  // detailed setup might be needed to demonstrate specific states
  // For now, this will likely render the spinner then the match (with fallback deck).
}
