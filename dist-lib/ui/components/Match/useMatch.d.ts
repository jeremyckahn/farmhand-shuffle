import { ShellContextProps } from './ShellContext';
import { MatchProps } from './types';
export declare const useMatch: ({ playerSeeds, userPlayerId, onMatchEnd, onCheckpoint, initialMatch, }: Pick<MatchProps, "playerSeeds" | "userPlayerId" | "onMatchEnd" | "onCheckpoint" | "initialMatch">) => {
    match: import('../../../game/types').IMatch;
    botState: import('../../../public').BotState;
    handleHandVisibilityToggle: () => void;
    handleClickPlayAgain: () => void;
    isHandDisabled: boolean;
    isInputBlocked: boolean;
    shellContextValue: ShellContextProps;
    showGameOver: boolean;
    showHand: boolean;
};
