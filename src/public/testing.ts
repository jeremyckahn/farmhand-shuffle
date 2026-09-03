// A second, lighter public entry point (@jeremyckahn/farmhand-shuffle/testing)
// containing only pure game-logic exports - no React/MUI. The main entry
// (./index.ts) re-exports the Match UI component, whose React/MUI
// dependencies are externalized in the build (see vite.lib.config.mts) and
// left for a consuming bundler to resolve - fine inside a real app, but it
// means even a plain Node script that only wants e.g. buildLowFundsMatch
// can't import from the main entry at all outside a bundler. This entry
// has no such dependencies, so it's usable anywhere Node runs, including a
// host app's own fixture-generation scripts (see this package's
// MATCH_FIXTURES.md and farmhand's e2e/fixtures/ for a real example).

export type { BotState, IMatch } from '../game/types'
export { MatchState } from '../game/types'
export { buildLowFundsMatch, idleBotState } from '../game/config/matchFixtures'
export type { LowFundsMatchFixtureOptions } from '../game/config/matchFixtures'
export {
  serializeMatch,
  deserializeMatch,
} from '../services/MatchSerializationService'
export type {
  SerializedMatch,
  SerializedCardInstance,
} from '../services/MatchSerializationService'
