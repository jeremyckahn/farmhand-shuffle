import { StateValue } from 'xstate';
import { BotTurnActionState, MatchMachineContext, MatchState } from '../../game/types';
export interface MatchRuleMachineContextSelectorDerivation extends Pick<MatchMachineContext, 'match'> {
    matchState: StateValue;
}
export declare const useMatchRules: () => {
    match: import('../../game/types').IMatch;
    matchState: MatchState;
    botTurnActionState: BotTurnActionState | null;
};
