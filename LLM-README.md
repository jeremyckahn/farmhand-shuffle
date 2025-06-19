# LLM-README.md

## Introduction

This document serves as a comprehensive guide for Large Language Models (LLMs) tasked with developing and extending the **Farmhand Shuffle** project. It outlines the codebase's architecture, design patterns, and best practices to ensure that new contributions are consistent, robust, and maintainable.

## High-Level Architecture

The project is a web-based card game built with React, TypeScript, and XState. It follows a clear separation of concerns between the core game logic and the user interface.

- **Game Logic (`src/game`)**: This is the engine of the game. It is a self-contained module that knows nothing about the UI. It's responsible for managing the game state, enforcing rules, and handling all game mechanics. It is designed to be pure and immutable.
- **User Interface (`src/ui`)**: This is the presentation layer, built with React and Material-UI. It is responsible for rendering the game state and capturing user input. It interacts with the game logic through a well-defined interface provided by a state machine.
- **State Management**: The game's state is managed by an **XState state machine**. The UI subscribes to this state machine and sends events to it based on user actions. The game logic, encapsulated within the state machine's actions and services, processes these events and updates the game state.

## Project Structure

The project is organized into the following key directories within `src/`:

```
farmhand-shuffle/
├── src/
│   ├── game/         # Core game logic, rules, and state.
│   │   ├── cards/    # Definitions for all card types (crops, events, water).
│   │   ├── reducers/ # Pure functions that immutably update the game state.
│   │   ├── services/ # Services that provide core functionalities like game setup, lookups, and bot logic.
│   │   │   ├── Rules/  # Contains the XState state machine definition.
│   │   ├── types/    # TypeScript type definitions and type guards for the game.
│   │
│   ├── ui/           # All UI-related code.
│   │   ├── components/ # Reusable React components (Card, Deck, Hand, Field, etc.).
│   │   ├── hooks/      # Custom React hooks for UI logic.
│   │   ├── img/        # Image assets for cards and UI elements.
│   │
│   ├── lib/          # General-purpose utility functions and hooks.
│   ├── services/     # General services (not specific to the game logic).
│   └── test-utils/   # Stubs and mocks for testing.
│
├── package.json      # Project dependencies and scripts.
└── vite.config.ts    # Vite and Vitest configuration.
```

## Core Concepts & Design Patterns

To contribute effectively, it's essential to understand these core patterns:

### 1. State Machine (XState)

The entire game flow is managed by a state machine defined in `src/game/services/Rules/state-machine/`.

- **States**: Represented by the `GameState` enum (`src/game/types/index.ts`). Each file in the `state-machine` directory corresponds to one or more states.
- **Events**: Represented by the `GameEvent` enum. These are the only way to trigger state transitions.
- **Context**: The `GameMachineContext` interface (`createMachine.ts`) holds the game's state (`IGame`) and other UI-related state.
- **Actions & Guards**: Logic is executed within actions. Guards (`GameStateGuard`) determine whether a transition is allowed.

**Key takeaway**: Never mutate the game state directly. Always send an event to the state machine.

### 2. Immutable Reducers

Game state transformations are handled by **pure functions** located in `src/game/reducers/`. This pattern is fundamental to the stability and predictability of the game.

- **Purity**: A reducer takes the current `IGame` state and a payload as input and returns a **new, updated `IGame` state**. It must not have any side effects (e.g., no API calls, no direct DOM manipulation).
- **Immutability**: Never modify the input `game` object. Always use the spread syntax (`...`) or other immutable techniques to create a new, distinct state object.

**Why is this pattern important?**

- **Predictability & Testability**: Because reducers are pure functions, the same input will always produce the same output. This makes game logic easy to reason about and straightforward to test. We can test a state transformation in isolation by simply calling the reducer with a known game state and asserting on the new state returned, without needing to mock complex dependencies.
- **Simplified Debugging**: When bugs occur, we can trace the sequence of actions and inspect the state at each step to pinpoint exactly where the logic went wrong. Immutability makes it possible to implement "time-travel debugging," where we can step backward and forward through state changes.
- **Performance Optimization**: Immutability allows for significant performance gains in React. By creating new state objects instead of mutating old ones, we can use fast reference equality checks (`===`) in memoized components (`React.memo`) to quickly determine if a component needs to re-render. This avoids costly deep comparisons of objects.
- **Concurrency Safety**: By ensuring state is never mutated directly, we eliminate a whole class of bugs related to race conditions and unpredictable state changes that can occur in more complex, asynchronous applications.

**Example: `incrementPlayerFunds` reducer**

This reducer demonstrates purity and immutability. It doesn't modify the original `game` object; instead, it composes a series of other pure reducers (`updatePlayer`, `updateTable`) to build up and return a completely new state tree.

```typescript
// src/game/reducers/increment-player-funds/index.ts
export const incrementPlayerFunds = (
  game: IGame,
  playerId: IPlayer['id'],
  amount: number
) => {
  const { funds } = game.table.players[playerId]
  const newFunds = Math.max(0, funds + amount)

  // Returns a new game object by composing other pure updaters
  return updatePlayer(game, playerId, { funds: newFunds })
}
```

### 3. Services

Services encapsulate specific domains of logic.

- **`Factory`**: Creates instances of game objects (players, cards, the game itself). Use this to ensure objects are created with the correct defaults.
- **`Lookup`**: Provides safe methods to query the game state (e.g., `lookup.getPlayer()`, `lookup.findCropIndexesInPlayerHand()`).
- **`Pricing`**: Contains all logic related to crop values.
- **`BotLogic`**: Encapsulates the decision-making for AI opponents.
- **`Validation`**: Ensures that data structures, like a player's starting deck, are valid.

## How to Extend the Project

Follow these guides to add new features in a way that is consistent with the existing codebase.

### Adding a New Crop Card

1. **Create Card Definition**: In `src/game/cards/crops/`, create a new directory for your crop (e.g., `tomato/`). Inside, create a `tomato.ts` file. Use the `baseToCrop` helper function.

   ```typescript
   // src/game/cards/crops/tomato/tomato.ts
   import { baseToCrop } from '../baseToCrop'

   export default baseToCrop({
     id: 'tomato',
     name: 'Tomato',
     waterToMature: 2,
   })
   ```

2. **Export the Card**: Add your new card to `src/game/cards/crops/index.ts`.

   ```typescript
   // src/game/cards/crops/index.ts
   import carrot from './carrot/carrot'
   import pumpkin from './pumpkin/pumpkin'
   import tomato from './tomato/tomato' // Add this line

   export { carrot, pumpkin, tomato } // And this
   ```

3. **Add Image**: Add a `tomato.png` to `src/ui/img/cards/`.
4. **Register Image**: Export the image from `src/ui/img/index.ts`.

   ```typescript
   // src/ui/img/index.ts
   import tomato from './cards/tomato.png' // Add this
   export const cards = {
     // ...
     tomato, // Add this
   }
   ```

5. **Create a Test Stub**: Add a stub for your new card in `src/test-utils/stubs/cards.ts` for easy use in tests.
6. **Add to Deck**: To make it appear in the game, add it to the `stubDeck` function in `src/test-utils/stubs/deck.ts`.

### Adding a New Game Reducer

1. **Create Reducer File**: In `src/game/reducers/`, create a new directory for your reducer (e.g., `mynew-reducer/`). Inside, create an `index.ts` file.
2. **Write Pure Function**: Implement your reducer as a pure function. It must take `game: IGame` as its first argument and return a new `IGame` object.

   ```typescript
   // src/game/reducers/mynew-reducer/index.ts
   export const myNewReducer = (game: IGame, payload: any): IGame => {
     // ...logic to create a new game state
     return { ...game, ...updatedProperties }
   }
   ```

3. **Write Tests**: Create an `index.test.ts` file in the same directory. Write comprehensive unit tests to cover all logic paths of your reducer.

### Adding a New UI Component

1. **Create Component Directory**: In `src/ui/components/`, create a new directory for your component (e.g., `MyComponent/`).
2. **Create Files**: Inside, create the following files:
   - `MyComponent.tsx`: The React component itself.
   - `MyComponent.stories.tsx`: A Storybook file for showcasing the component in different states.
   - `MyComponent.test.tsx`: A test file using `@testing-library/react`.
3. **Interact with Game State**:
   - Use the `useGameRules` hook to get data from the game state machine.
   - Use `const actorRef = ActorContext.useActorRef()` to get a reference to the state machine actor.
   - Dispatch events using `actorRef.send({ type: GameEvent.MY_EVENT, ...payload })`.

## Testing

The project uses `vitest` for unit and integration testing and `Storybook` with `Chromatic` for visual regression testing.

- **Unit Tests**: All new logic (reducers, services, complex components) must be accompanied by unit tests. Test files are co-located with the source files.
- **Stubs**: Use the stubs in `src/test-utils/stubs/` to create consistent and readable test data.
- **UI Testing**: Use `@testing-library/react` to test component behavior from a user's perspective.
- **Running Tests**: Use the scripts in `package.json`:
  - `npm test`: Run all tests once.

## Coding Style & Conventions

- **TypeScript**: Use TypeScript for all new code. Adhere to the strict mode settings in `tsconfig.json`.
- **Immutability**: This is the most important principle in the codebase. Never mutate state directly.
- **File Organization**: Follow the existing structure. Logic for a feature should be self-contained within its own directory.
- **Exports**: Use default exports for card definitions (`src/game/cards/crops/`) to prevent incorrect imports. For most other things, use named exports.

By following these guidelines, you will be able to contribute high-quality, maintainable code to the Farmhand Shuffle project.
