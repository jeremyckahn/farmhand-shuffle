import { MatchEvents, MatchMachineContext } from '../../../types';
interface BotTurnActionArgs {
    context: MatchMachineContext;
    enqueue: {
        raise: (event: MatchEvents) => void;
        assign: (context: Partial<MatchMachineContext>) => void;
    };
}
/**
 * Wraps a bot action function with error handling logic.
 *
 * If the action throws a `PlayerOutOfFundsError`, this wrapper catches it and
 * raises a `PLAYER_RAN_OUT_OF_FUNDS` event instead of crashing the game.
 *
 * Any other errors are logged to the console and re-thrown as a
 * `MatchStateCorruptError`.
 *
 * @param fn - The bot action function to wrap.
 * @returns A new function that executes the original action with error handling.
 */
export declare const withBotErrorHandling: <TParams extends BotTurnActionArgs>(fn: (params: TParams) => void) => ((params: TParams) => void);
export {};
