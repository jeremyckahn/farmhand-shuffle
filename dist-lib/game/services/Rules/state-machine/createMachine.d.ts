import { MatchEvent, MatchMachineContext, MatchStateGuard } from '../../../types';
export declare const createMachine: <const TConfig extends import('xstate').MachineConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
    type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
}) | {
    type: MatchEvent.HARVEST_CROP;
    playerId: import('../../../types').IPlayer["id"];
    cropIdxInFieldToHarvest: number;
} | {
    type: MatchEvent.INIT;
    playerSeeds: import('../../../types').IPlayerSeed[];
    userPlayerId: string;
} | {
    type: MatchEvent.RESUME;
    matchState: import("../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
    match: import('../../../types').IMatch;
    botState: import('../../../types').BotState;
    userPlayerId: string;
} | {
    type: MatchEvent.START_TURN;
} | {
    type: MatchEvent.SET_SHELL;
    shell: import('../../../types').IShell;
} | {
    type: MatchEvent.SELECT_CARD_POSITION;
    cardIdxInHand: number;
    fieldIdxToPlace: number;
    playerId: import('../../../types').IPlayer["id"];
} | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
    type: MatchEvent.DISCARD_CARD_FROM_FIELD;
    playerId: import('../../../types').IPlayer["id"];
    cardIdxInField: number;
} | {
    type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
    playerId: import('../../../types').IPlayer["id"];
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
    playerId: import('../../../types').IPlayer["id"];
    waterCardInHandIdx: number;
} | {
    type: MatchEvent.SELECT_CROP_TO_WATER;
    playerId: import('../../../types').IPlayer["id"];
    waterCardInHandIdx: number;
    cropIdxInFieldToWater: number;
} | {
    type: MatchEvent.OPERATION_ABORTED;
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
} | {
    type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
} | {
    type: MatchEvent.BOT_TURN_INITIALIZED;
} | {
    type: MatchEvent.BOT_TURN_PHASE_COMPLETE;
}, never, never, import('xstate').Values<{
    IS_BOT_PHASE_PLAYING_EVENTS: {
        type: MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
        params: unknown;
    };
    IS_BOT_PHASE_PLAYING_TOOLS: {
        type: MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
        params: unknown;
    };
    IS_SELECTED_IDX_VALID: {
        type: MatchStateGuard.IS_SELECTED_IDX_VALID;
        params: unknown;
    };
    IS_SETUP_PHASE: {
        type: MatchStateGuard.IS_SETUP_PHASE;
        params: unknown;
    };
}>, never, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject>>(config: TConfig) => import('xstate').StateMachine<MatchMachineContext, (Partial<MatchMachineContext> & {
    type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
}) | {
    type: MatchEvent.HARVEST_CROP;
    playerId: import('../../../types').IPlayer["id"];
    cropIdxInFieldToHarvest: number;
} | {
    type: MatchEvent.INIT;
    playerSeeds: import('../../../types').IPlayerSeed[];
    userPlayerId: string;
} | {
    type: MatchEvent.RESUME;
    matchState: import("../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
    match: import('../../../types').IMatch;
    botState: import('../../../types').BotState;
    userPlayerId: string;
} | {
    type: MatchEvent.START_TURN;
} | {
    type: MatchEvent.SET_SHELL;
    shell: import('../../../types').IShell;
} | {
    type: MatchEvent.SELECT_CARD_POSITION;
    cardIdxInHand: number;
    fieldIdxToPlace: number;
    playerId: import('../../../types').IPlayer["id"];
} | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
    type: MatchEvent.DISCARD_CARD_FROM_FIELD;
    playerId: import('../../../types').IPlayer["id"];
    cardIdxInField: number;
} | {
    type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
    playerId: import('../../../types').IPlayer["id"];
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
    playerId: import('../../../types').IPlayer["id"];
    waterCardInHandIdx: number;
} | {
    type: MatchEvent.SELECT_CROP_TO_WATER;
    playerId: import('../../../types').IPlayer["id"];
    waterCardInHandIdx: number;
    cropIdxInFieldToWater: number;
} | {
    type: MatchEvent.OPERATION_ABORTED;
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
} | {
    type: MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
} | {
    type: MatchEvent.BOT_TURN_INITIALIZED;
} | {
    type: MatchEvent.BOT_TURN_PHASE_COMPLETE;
}, {}, never, never, import('xstate').Values<{
    IS_BOT_PHASE_PLAYING_EVENTS: {
        type: MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
        params: unknown;
    };
    IS_BOT_PHASE_PLAYING_TOOLS: {
        type: MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
        params: unknown;
    };
    IS_SELECTED_IDX_VALID: {
        type: MatchStateGuard.IS_SELECTED_IDX_VALID;
        params: unknown;
    };
    IS_SETUP_PHASE: {
        type: MatchStateGuard.IS_SETUP_PHASE;
        params: unknown;
    };
}>, never, import('xstate').ToStateValue<TConfig>, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, TConfig>;
