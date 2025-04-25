# Farmhand Shuffle

Farmhand Shuffle is a web-based card game for farmers. The game revolves around
managing a farm, planting crops, and strategically using resources. Players
take turns performing actions using cards.

Farmhand Shuffle is a part of the [Farmhand](https://www.farmhand.life/) game series.

## 🟡 Project status

Farmhand Shuffle is **stable** but **incomplete** and **under development**.

While a game of Farmhand Shuffle can be played from start to finish and either
won or lost, many things are still missing. Some planned features:

- Tool cards
- Event cards
- More crops cards
- Multiplayer
- A single-player campaign

## Gameplay Overview

Please see [the wiki](https://github.com/jeremyckahn/farmhand-shuffle/wiki) for
a more complete explanation of the game rules.

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

- **Crop Cards**: Represent different types of crops that can be planted.
- **Water Cards**: Used to water crops.
- **Event Cards**: (Not yet implemented 🚧) These cards might introduce various
  events that affect gameplay.
- **Tool Cards**: (Not yet implemented 🚧) Cards that provide tools or actions
  to the player.
- **Community Fund**: A central pool of funds that players interact with.
- **Player Funds**: Each player has their own supply of funds.
- **Field**: The area where players plant their crops.
- **Hand**: The cards currently available to the player.
- **Deck**: The stack of cards players draw from.
- **Discard Pile**: Where used cards are placed.

## Project Structure

The project is structured as follows:

```text
└── farmhand-shuffle/
    ├── src/              # Source code directory
    │   ├── game/         # Game logic implementation
    │   ├── lib/          # Utility libraries
    │   ├── services/     # General services
    │   ├── test-utils/   # Testing utilities
    │   └── ui/           # User interface components
    ├── package.json      # Project dependencies and scripts
    ├── tsconfig.json     # TypeScript configuration
    ├── vite.config.ts    # Vite build tool configuration
    └── ...               # Other configuration files
```

## Development

To get started with development:

- Install dependencies: `npm ci`
- Start the development server: `npm start`
- Run tests: `npm test`
- Build the project: `npm run build`

### Additional development utility scripts

- Check for type errors: `npm run check:types`
- Code formatting: `npm run fix:style`
- Code linting: `npm run fix:lint`
- Start Storybook: `npm run start:storybook`
