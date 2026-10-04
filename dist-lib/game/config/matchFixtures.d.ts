import { BotState, IMatch } from '../types';
export interface LowFundsMatchFixtureOptions {
    sessionOwnerPlayerId: string;
    opponentPlayerId: string;
    /** Must equal `sessionOwnerPlayerId` or `opponentPlayerId`. */
    losingPlayerId: string;
}
/**
 * A fresh, idle `botState` - the bot isn't mid-turn, matching a match that's
 * sitting at the start of the session owner's turn (see buildLowFundsMatch).
 */
export declare const idleBotState: BotState;
/**
 * Builds a match sitting at the very start of the session owner's turn,
 * with `losingPlayerId` one real turn away from running out of funds - end
 * that turn (in the UI: click "End turn") and the match ends immediately
 * once the tax charge lands on `losingPlayerId`:
 *
 * - `losingPlayerId === opponentPlayerId`: their tax is charged
 *   immediately, as the very next thing that happens - the session owner
 *   wins right away.
 * - `losingPlayerId === sessionOwnerPlayerId`: the opponent's turn plays
 *   out first (their funds are unaffected), then the tax charge that opens
 *   the session owner's *following* turn is what ends the match - the
 *   session owner loses, but only after the opponent's turn resolves.
 *
 * Either way, exactly one `MatchEvent.START_TURN` (the same event Match's
 * own "End turn" button sends) is the entire trigger. See this module's
 * README for the full mechanic and a worked E2E example.
 *
 * This match is meant to be loaded via `MatchEvent.RESUME` at
 * `MatchState.WAITING_FOR_PLAYER_TURN_ACTION` (the same production
 * checkpoint/resume path a real saved match uses) - see
 * `matchFixtures.test.ts` for a full, runnable example including the
 * RESUME + START_TURN sequence and the resulting `GAME_OVER`/`winner`
 * assertions.
 */
export declare const buildLowFundsMatch: ({ sessionOwnerPlayerId, opponentPlayerId, losingPlayerId, }: LowFundsMatchFixtureOptions) => {
    match: IMatch;
    botState: BotState;
};
