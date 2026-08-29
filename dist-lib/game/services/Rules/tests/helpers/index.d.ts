import { CropInstance, MatchEvent, ICard, WaterInstance, EventInstance, ToolInstance } from '../../../../types';
export declare const player1: import('../../../../types').IPlayer;
export declare const player2: import('../../../../types').IPlayer;
export declare const playerSeeds: import('../../../../types').IPlayer[];
export declare const expectCropInstance: ({ id }: ICard) => CropInstance;
export declare const expectWaterInstance: ({ id }: ICard) => WaterInstance;
export declare const expectEventInstance: ({ id }: ICard) => EventInstance;
export declare const expectToolInstance: ({ id }: ICard) => ToolInstance;
export declare const carrot1: import('../../../../types').ICrop & import('../../../../types').Instance;
export declare const carrot2: import('../../../../types').ICrop & import('../../../../types').Instance;
export declare const pumpkin1: import('../../../../types').ICrop & import('../../../../types').Instance;
/**
 * Initializes a match actor and sets up each player with a played crop.
 */
export declare const createSetUpMatchActor: () => import('xstate').Actor<import('xstate').StateMachine<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
    type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
}) | {
    type: MatchEvent.HARVEST_CROP;
    playerId: import('../../../../types').IPlayer["id"];
    cropIdxInFieldToHarvest: number;
} | {
    type: MatchEvent.INIT;
    playerSeeds: import('../../../../types').IPlayerSeed[];
    userPlayerId: string;
} | {
    type: MatchEvent.RESUME;
    matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
    match: import('../../../../types').IMatch;
    botState: import('../../../../types').BotState;
    userPlayerId: string;
} | {
    type: MatchEvent.START_TURN;
} | {
    type: MatchEvent.SET_SHELL;
    shell: import('../../../../types').IShell;
} | {
    type: MatchEvent.SELECT_CARD_POSITION;
    cardIdxInHand: number;
    fieldIdxToPlace: number;
    playerId: import('../../../../types').IPlayer["id"];
} | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
    type: MatchEvent.DISCARD_CARD_FROM_FIELD;
    playerId: import('../../../../types').IPlayer["id"];
    cardIdxInField: number;
} | {
    type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
    playerId: import('../../../../types').IPlayer["id"];
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
} | {
    type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
    playerId: import('../../../../types').IPlayer["id"];
    waterCardInHandIdx: number;
} | {
    type: MatchEvent.SELECT_CROP_TO_WATER;
    playerId: import('../../../../types').IPlayer["id"];
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
        type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
        params: unknown;
    };
    IS_BOT_PHASE_PLAYING_TOOLS: {
        type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
        params: unknown;
    };
    IS_SELECTED_IDX_VALID: {
        type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
        params: unknown;
    };
    IS_SETUP_PHASE: {
        type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
        params: unknown;
    };
}>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
    readonly order?: number;
    readonly initial?: string | import('xstate').InitialTransitionConfig<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never> | undefined;
    readonly description?: string;
    readonly id?: string | undefined;
    readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
    readonly meta?: import('xstate').MetaObject | undefined;
    readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<import('../../../../types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }>;
    readonly always?: import('xstate').TransitionConfigOrTarget<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
    readonly after?: import('xstate').DelayedTransitions<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never> | undefined;
    readonly target?: string | undefined;
    readonly version?: string;
    readonly on?: import('xstate').TransitionsConfig<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
    readonly exit?: import('xstate').Actions<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }, undefined, never, never, import('xstate').Values<{
        IS_BOT_PHASE_PLAYING_EVENTS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, import('xstate').EventObject> | undefined;
    readonly history?: "shallow" | "deep" | boolean | undefined;
    readonly states?: import('xstate').StatesConfig<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
    readonly invoke?: readonly never[] | undefined;
    readonly entry?: import('xstate').Actions<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }, undefined, never, never, import('xstate').Values<{
        IS_BOT_PHASE_PLAYING_EVENTS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, import('xstate').EventObject> | undefined;
    readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<import('../../../../types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
    readonly parent?: import('xstate').StateNode<import('../../../../types').MatchMachineContext, (Partial<import('../../../../types').MatchMachineContext> & {
        type: MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: MatchEvent.HARVEST_CROP;
        playerId: import('../../../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: MatchEvent.INIT;
        playerSeeds: import('../../../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: MatchEvent.RESUME;
        matchState: import("../../../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../../types').IMatch;
        botState: import('../../../../types').BotState;
        userPlayerId: string;
    } | {
        type: MatchEvent.START_TURN;
    } | {
        type: MatchEvent.SET_SHELL;
        shell: import('../../../../types').IShell;
    } | {
        type: MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../../types').IPlayer["id"];
    } | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_CROP> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_EVENT> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../../types').PlayCardEventPayload<MatchEvent.PLAY_WATER> | {
        type: MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../../types').IPlayer["id"];
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../../types').IPlayer["id"];
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
    }> | undefined;
    readonly tags?: import('xstate').SingleOrArray<string> | undefined;
    readonly context: import('../../../../types').MatchMachineContext;
}>>;
