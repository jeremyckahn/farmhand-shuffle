export declare const ActorContext: {
    useSelector: <T>(selector: (snapshot: import('xstate').MachineSnapshot<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
        type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: import("../../../game/types").MatchEvent.HARVEST_CROP;
        playerId: import('../../../game/types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: import("../../../game/types").MatchEvent.INIT;
        playerSeeds: import('../../../game/types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: import("../../../game/types").MatchEvent.RESUME;
        matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../game/types').IMatch;
        botState: import('../../../public').BotState;
        userPlayerId: string;
    } | {
        type: import("../../../game/types").MatchEvent.START_TURN;
    } | {
        type: import("../../../game/types").MatchEvent.SET_SHELL;
        shell: import('../../../game/types').IShell;
    } | {
        type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../game/types').IPlayer["id"];
    } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
        type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../game/types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../game/types').IPlayer["id"];
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../game/types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../game/types').IPlayer["id"];
        waterCardInHandIdx: number;
        cropIdxInFieldToWater: number;
    } | {
        type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
    } | {
        type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
    }, {}, {}, string, import('xstate').NonReducibleUnknown, import('xstate').MetaObject, {
        readonly order?: number;
        readonly initial?: string | import('xstate').InitialTransitionConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly description?: string;
        readonly id?: string | undefined;
        readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
        readonly meta?: import('xstate').MetaObject | undefined;
        readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }>;
        readonly always?: import('xstate').TransitionConfigOrTarget<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
        readonly after?: import('xstate').DelayedTransitions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly target?: string | undefined;
        readonly version?: string;
        readonly on?: import('xstate').TransitionsConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly exit?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly history?: "shallow" | "deep" | boolean | undefined;
        readonly states?: import('xstate').StatesConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly invoke?: readonly never[] | undefined;
        readonly entry?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
        readonly parent?: import('xstate').StateNode<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }> | undefined;
        readonly tags?: import('xstate').SingleOrArray<string> | undefined;
        readonly context: import('../../../game/types').MatchMachineContext;
    }>) => T, compare?: ((a: T, b: T) => boolean) | undefined) => T;
    useActorRef: () => import('xstate').Actor<import('xstate').StateMachine<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
        type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: import("../../../game/types").MatchEvent.HARVEST_CROP;
        playerId: import('../../../game/types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: import("../../../game/types").MatchEvent.INIT;
        playerSeeds: import('../../../game/types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: import("../../../game/types").MatchEvent.RESUME;
        matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../../game/types').IMatch;
        botState: import('../../../public').BotState;
        userPlayerId: string;
    } | {
        type: import("../../../game/types").MatchEvent.START_TURN;
    } | {
        type: import("../../../game/types").MatchEvent.SET_SHELL;
        shell: import('../../../game/types').IShell;
    } | {
        type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../../game/types').IPlayer["id"];
    } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
        type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../../game/types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../../game/types').IPlayer["id"];
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../../game/types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../../game/types').IPlayer["id"];
        waterCardInHandIdx: number;
        cropIdxInFieldToWater: number;
    } | {
        type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
    } | {
        type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
    } | {
        type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
    }, {}, never, never, import('xstate').Values<{
        IS_BOT_PHASE_PLAYING_EVENTS: {
            type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
        readonly order?: number;
        readonly initial?: string | import('xstate').InitialTransitionConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly description?: string;
        readonly id?: string | undefined;
        readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
        readonly meta?: import('xstate').MetaObject | undefined;
        readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }>;
        readonly always?: import('xstate').TransitionConfigOrTarget<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
        readonly after?: import('xstate').DelayedTransitions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly target?: string | undefined;
        readonly version?: string;
        readonly on?: import('xstate').TransitionsConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly exit?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly history?: "shallow" | "deep" | boolean | undefined;
        readonly states?: import('xstate').StatesConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly invoke?: readonly never[] | undefined;
        readonly entry?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
        readonly parent?: import('xstate').StateNode<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }> | undefined;
        readonly tags?: import('xstate').SingleOrArray<string> | undefined;
        readonly context: import('../../../game/types').MatchMachineContext;
    }>>;
    Provider: (props: {
        children: React.ReactNode;
        options?: import('xstate').ActorOptions<import('xstate').StateMachine<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, {}, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
            readonly order?: number;
            readonly initial?: string | import('xstate').InitialTransitionConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never> | undefined;
            readonly description?: string;
            readonly id?: string | undefined;
            readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
            readonly meta?: import('xstate').MetaObject | undefined;
            readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }>;
            readonly always?: import('xstate').TransitionConfigOrTarget<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
            readonly after?: import('xstate').DelayedTransitions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never> | undefined;
            readonly target?: string | undefined;
            readonly version?: string;
            readonly on?: import('xstate').TransitionsConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
            readonly exit?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, undefined, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject> | undefined;
            readonly history?: "shallow" | "deep" | boolean | undefined;
            readonly states?: import('xstate').StatesConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
            readonly invoke?: readonly never[] | undefined;
            readonly entry?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, undefined, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject> | undefined;
            readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
            readonly parent?: import('xstate').StateNode<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }> | undefined;
            readonly tags?: import('xstate').SingleOrArray<string> | undefined;
            readonly context: import('../../../game/types').MatchMachineContext;
        }>> | undefined;
        machine?: never;
        logic?: import('xstate').StateMachine<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
            type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../../game/types").MatchEvent.HARVEST_CROP;
            playerId: import('../../../game/types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../../game/types").MatchEvent.INIT;
            playerSeeds: import('../../../game/types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.RESUME;
            matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../../game/types').IMatch;
            botState: import('../../../public').BotState;
            userPlayerId: string;
        } | {
            type: import("../../../game/types").MatchEvent.START_TURN;
        } | {
            type: import("../../../game/types").MatchEvent.SET_SHELL;
            shell: import('../../../game/types').IShell;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../../game/types').IPlayer["id"];
        } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
            type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../../game/types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../../game/types').IPlayer["id"];
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../../game/types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, {}, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
            readonly order?: number;
            readonly initial?: string | import('xstate').InitialTransitionConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never> | undefined;
            readonly description?: string;
            readonly id?: string | undefined;
            readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
            readonly meta?: import('xstate').MetaObject | undefined;
            readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }>;
            readonly always?: import('xstate').TransitionConfigOrTarget<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
            readonly after?: import('xstate').DelayedTransitions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never> | undefined;
            readonly target?: string | undefined;
            readonly version?: string;
            readonly on?: import('xstate').TransitionsConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
            readonly exit?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, undefined, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject> | undefined;
            readonly history?: "shallow" | "deep" | boolean | undefined;
            readonly states?: import('xstate').StatesConfig<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
            readonly invoke?: readonly never[] | undefined;
            readonly entry?: import('xstate').Actions<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, undefined, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject> | undefined;
            readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<import('../../../game/types').MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }, never, never, import('xstate').Values<{
                IS_BOT_PHASE_PLAYING_EVENTS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                    params: unknown;
                };
                IS_BOT_PHASE_PLAYING_TOOLS: {
                    type: import("../../../game/types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                    params: unknown;
                };
                IS_SELECTED_IDX_VALID: {
                    type: import("../../../game/types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                    params: unknown;
                };
                IS_SETUP_PHASE: {
                    type: import("../../../game/types").MatchStateGuard.IS_SETUP_PHASE;
                    params: unknown;
                };
            }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
            readonly parent?: import('xstate').StateNode<import('../../../game/types').MatchMachineContext, (Partial<import('../../../game/types').MatchMachineContext> & {
                type: import("../../../game/types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
            }) | {
                type: import("../../../game/types").MatchEvent.HARVEST_CROP;
                playerId: import('../../../game/types').IPlayer["id"];
                cropIdxInFieldToHarvest: number;
            } | {
                type: import("../../../game/types").MatchEvent.INIT;
                playerSeeds: import('../../../game/types').IPlayerSeed[];
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.RESUME;
                matchState: import("../../../public").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../../public").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
                match: import('../../../game/types').IMatch;
                botState: import('../../../public').BotState;
                userPlayerId: string;
            } | {
                type: import("../../../game/types").MatchEvent.START_TURN;
            } | {
                type: import("../../../game/types").MatchEvent.SET_SHELL;
                shell: import('../../../game/types').IShell;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CARD_POSITION;
                cardIdxInHand: number;
                fieldIdxToPlace: number;
                playerId: import('../../../game/types').IPlayer["id"];
            } | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_CROP> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_EVENT> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../../public').PlayCardEventPayload<import("../../../game/types").MatchEvent.PLAY_WATER> | {
                type: import("../../../game/types").MatchEvent.DISCARD_CARD_FROM_FIELD;
                playerId: import('../../../game/types').IPlayer["id"];
                cardIdxInField: number;
            } | {
                type: import("../../../game/types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
                playerId: import('../../../game/types').IPlayer["id"];
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
            } | {
                type: import("../../../game/types").MatchEvent.SELECT_CROP_TO_WATER;
                playerId: import('../../../game/types').IPlayer["id"];
                waterCardInHandIdx: number;
                cropIdxInFieldToWater: number;
            } | {
                type: import("../../../game/types").MatchEvent.OPERATION_ABORTED;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_INITIALIZED;
            } | {
                type: import("../../../game/types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
            }> | undefined;
            readonly tags?: import('xstate').SingleOrArray<string> | undefined;
            readonly context: import('../../../game/types').MatchMachineContext;
        }> | undefined;
    }) => React.ReactElement<any, any>;
};
