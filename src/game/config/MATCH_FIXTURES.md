# Match completion fixtures

`matchFixtures.ts` exports `buildLowFundsMatch`, a way to build a match
that's exactly **one real turn away** from ending, for E2E/integration
tests that need to reach a completed match (win or loss) without playing
one out card-by-card.

## Why this exists

Farmhand Shuffle is meant to be embedded in host apps (see Farmhand's own
integration). Those hosts need E2E coverage for what happens when a match
_completes_ - payout, achievements, notifications, whatever the host
does with the result - and playing an entire match to completion through
the UI, turn after turn, is slow and flaky to automate. This gives any
consumer a fixture that's one click away from a real, genuine completion,
so the test only has to drive the one action that actually matters.

## The mechanic it's built on

Every turn, the player whose turn is starting automatically pays
`STANDARD_TAX_AMOUNT` (currently `5`) from their own funds into the
community fund (see `src/game/reducers/start-turn`). The deduction is
clamped to the player's actual balance rather than going negative. If
that leaves them at exactly `0`, the match ends immediately -
`MatchEvent.PLAYER_RAN_OUT_OF_FUNDS` fires and the _other_ player wins.

Both players start with `INITIAL_PLAYER_FUNDS` (currently `50`), so
`buildLowFundsMatch` sets whichever player you designate as the loser to
`STANDARD_TAX_AMOUNT - 1` (currently `4`) - any positive amount less than
the tax works identically, since the deduction clamps to their balance
either way and always leaves them at `0`.

The fixture always represents the moment right at the start of the
**session owner's** turn (`MatchState.WAITING_FOR_PLAYER_TURN_ACTION`).
From there, exactly one `MatchEvent.START_TURN` - the same event `Match`'s
own "End turn" button sends - is the entire trigger:

- **Opponent is the loser:** their tax charge is the very next thing that
  happens once you end your turn - the match ends immediately, you win.
- **Session owner is the loser:** ending your turn hands play to the
  opponent, whose own turn resolves normally (their funds are unaffected)
  before it becomes your turn again - the match ends when _your_ next tax
  charge lands, and the opponent wins. Same one real action from the
  test's perspective, just resolved a beat later once the opponent's turn
  plays out.

## How to use it

`buildLowFundsMatch` returns a plain `{ match, botState }` pair - it does
not touch a live match actor, so it's a pure, synchronous function safe to
call anywhere (build scripts included).

```ts
import { buildLowFundsMatch, MatchState } from '@jeremyckahn/farmhand-shuffle'

const sessionOwnerPlayerId = 'my-app-user-id'
const opponentPlayerId = 'my-app-bot-id'

const { match, botState } = buildLowFundsMatch({
  sessionOwnerPlayerId,
  opponentPlayerId,
  // Swap this to `sessionOwnerPlayerId` for a "session owner loses" fixture.
  losingPlayerId: opponentPlayerId,
})
```

**Loading it into a live match:** send it through `MatchEvent.RESUME` -
the same production checkpoint/resume path a real saved match uses (see
`Match`'s `initialMatch` prop, and Farmhand's own
`FarmhandShuffleView.tsx` for a real consumer of it):

```ts
matchActor.send({
  type: MatchEvent.RESUME,
  matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
  match,
  botState,
  userPlayerId: sessionOwnerPlayerId,
})
```

If your host app resumes matches via a serialized/persisted shape rather
than talking to a match actor directly (Farmhand does - see its
`FarmhandShuffleView.tsx` and `SerializedFarmhandShuffleMatch`), run
`match` through this package's own `serializeMatch` and store the result
wherever your app expects a checkpoint to live, tagged with
`matchState: MatchState.WAITING_FOR_PLAYER_TURN_ACTION`.

**Triggering completion:** from there, whatever your app's real "end
turn" UI action is (in Farmhand: clicking the Fab in `TurnControl`) is the
entire trigger. No further event needs to be sent by the test itself.

**Validating a fixture:** see `matchFixtures.test.ts` in this directory
for a complete, runnable example - `RESUME` a fixture into a fresh actor,
send `START_TURN`, and assert the resulting `MatchState.GAME_OVER` /
`winner`. Reach for that pattern if you add a new fixture variant here or
need to confirm one still behaves as documented after a rules change.

## What this deliberately does _not_ use

`MatchEvent.DANGEROUSLY_SET_CONTEXT` (reserved for test/debug, see its own
comment in `src/game/types/index.ts`) is not involved anywhere in this
module. `buildLowFundsMatch` only calls the same `factory`/`updatePlayer`
functions any other production match-construction code uses, and loading
the result back into an actor goes through the real, already-tested
`RESUME` path - not a live actor's context being force-overwritten. This
fixture is exactly as "real" as a genuinely saved and resumed match.
