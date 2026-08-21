# Farmhand Shuffle

Farmhand Shuffle is a web-based card game for farmers. The game revolves around
managing a farm, planting crops, and strategically using resources. Players
take turns performing actions using cards.

Farmhand Shuffle is a part of the [Farmhand](https://www.farmhand.life/) game series.

## 🟡 Project status

Farmhand Shuffle is **stable** and **playable** but **incomplete** and **under
development**.

While a game of Farmhand Shuffle can be played from start to finish and either
won or lost, many things are still missing. Some planned features:

- More crop cards
- Multiplayer
- A single-player campaign

## Gameplay Overview

Please see [the Rules README](src/game/services/Rules/README.md) for a more
complete explanation of the game rules.

- **Crop Planting**: Players can plant crop cards from their hand onto their
  field.
- **Watering Crops**: Water cards are used to help crops grow. Each crop
  requires a specific amount of water to mature.
- **Harvesting**: Mature crops can be harvested to earn funds.
- **Fluctuating prices**: Random crop values are chosen to be raised or lowered
  for each player's turn.
- **Fund Management**: Players use funds to pay taxes and manage their farm
  operations.
- **Card Mechanics**: The game involves drawing cards, playing them, and
  discarding them.
- **Win condition**: Players that don't have funds to pay taxes are out. The
  last remaining player is the winner.

## Game Components

🚧 = Not yet implemented

- **Crop Cards**: Represent different types of crops that can be planted.
- **Water Cards**: Used to water crops.
- **Event Cards**: These cards might introduce various events that affect
  gameplay.
- **Tool Cards**: Cards that provide tools or actions to the player.
- 🚧 **Animal Cards**: Animals that can be placed in the Field to produce
  things for their owner
- **Community Fund**: A central pool of funds that players interact with.
- **Player Funds**: Each player has their own supply of funds.
- **Field**: The area where players plant their crops.
- **Hand**: The cards currently available to the player.
- **Deck**: The stack of cards players draw from.
- **Discard Pile**: Where used cards are placed.

## Project Structure

The project is structured as follows:

```text
farmhand-shuffle/
├── src/                  # Source code directory
│   ├── game/             # Game logic implementation
│   ├── lib/              # Internal utility libraries
│   ├── public/           # Published library entry point (npm package surface)
│   ├── services/         # General services
│   ├── test-utils/       # Testing utilities
│   └── ui/               # User interface components
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.mjs       # Vite build tool configuration (app build + tests)
├── vite.lib.config.mts   # Vite build tool configuration (library build)
└── ...                   # Other configuration files
```

## Development

To get started with development:

- Install dependencies: `npm ci`
- Start the development server: `npm start`
- Run tests: `npm test`
- Build the project: `npm run build`

### Additional development utility scripts

- Check for type errors: `npm run check:types`
- Start Storybook: `npm run start:storybook`
- Code formatting: `npm run fix:style`
- Code linting: `npm run fix:lint`

## Using Farmhand Shuffle as a library

In addition to the standalone app, this package publishes its `Match`
component (the full game UI, given a set of player seeds) as a library that
other packages can install and render directly.

Install it:

```shell
npm install @jeremyckahn/farmhand-shuffle
```

`react`, `react-dom`, `@mui/material`, `@mui/icons-material`,
`@emotion/react`, and `@emotion/styled` are `peerDependencies` — install
them alongside this package if your project doesn't already have them.

```tsx
import { Match } from '@jeremyckahn/farmhand-shuffle'

function App() {
  return <Match playerSeeds={playerSeeds} userPlayerId={userPlayerId} />
}
```

The library build is ESM-only (`dist-lib/index.mjs`) and ships its own
TypeScript declarations (`dist-lib/index.d.ts`), so no separate `@types`
package is needed.

### Releasing a new version

Publishing to npm is handled by the [Publish
Library](.github/workflows/publish.yml) GitHub Actions workflow — there's no
manual `npm publish` step.

1. Go to the repo's **Actions** tab → **Publish Library** → **Run workflow**.
2. Make sure **main** is selected as the branch (the workflow refuses to run
   from anything else).
3. In the **version** field, type `patch` (the default), `minor`, `major`,
   or an exact version like `1.4.0`.
4. Run it. The workflow runs the full check suite, bumps `package.json`
   (via `npm version`), commits and tags the bump, builds the library, and
   publishes it to npm.

**One-time setup required.** Publishing authenticates with npm via [Trusted
Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC) — no
long-lived token to store or rotate in CI. But npm has a bootstrapping
requirement: a trusted publisher can only be configured for a package that
already exists on the registry, and this package has never been published.
So the very first release needs one manual step; every release after that
is token-free.

1. **First release only:** publish once from your own machine.
   ```shell
   npm run build:lib
   npm login
   npm publish --access public
   ```
   This creates `@jeremyckahn/farmhand-shuffle` on the registry using your
   own npm account and 2FA — no secret is stored anywhere.
2. On npmjs.com, go to the package's **Settings** tab
   (`https://www.npmjs.com/package/@jeremyckahn/farmhand-shuffle/access`) →
   **Trusted Publisher** → add a GitHub Actions publisher:
   - Organization or user: `jeremyckahn`
   - Repository: `farmhand-shuffle`
   - Workflow filename: `publish.yml`
   - Environment: leave blank
   - Allowed actions: `npm publish`
3. From then on, running the **Publish Library** workflow (see steps above)
   authenticates via GitHub's OIDC token automatically — nothing else to
   configure, and nothing to rotate. There's no `NPM_TOKEN` secret involved
   at any point, by design.
