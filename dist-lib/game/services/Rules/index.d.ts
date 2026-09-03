import { MatchMachineContext } from '../../types';
export declare class RulesService {
    createMatchStateMachine: () => import('xstate').StateMachine<MatchMachineContext, (Partial<MatchMachineContext> & {
        type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: import("../../types").MatchEvent.HARVEST_CROP;
        playerId: import('../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: import("../../types").MatchEvent.INIT;
        playerSeeds: import('../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: import("../../types").MatchEvent.RESUME;
        matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../types').IMatch;
        botState: import('../../types').BotState;
        userPlayerId: string;
    } | {
        type: import("../../types").MatchEvent.START_TURN;
    } | {
        type: import("../../types").MatchEvent.SET_SHELL;
        shell: import('../../types').IShell;
    } | {
        type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../types').IPlayer["id"];
    } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
        type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../types').IPlayer["id"];
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../types').IPlayer["id"];
        waterCardInHandIdx: number;
        cropIdxInFieldToWater: number;
    } | {
        type: import("../../types").MatchEvent.OPERATION_ABORTED;
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
    } | {
        type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
    } | {
        type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
    }, {}, never, never, import('xstate').Values<{
        IS_BOT_PHASE_PLAYING_EVENTS: {
            type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
        readonly order?: number;
        readonly initial?: string | import('xstate').InitialTransitionConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly meta?: import('xstate').MetaObject | undefined;
        readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }>;
        readonly id?: string | undefined;
        readonly always?: import('xstate').TransitionConfigOrTarget<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
        readonly after?: import('xstate').DelayedTransitions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly on?: import('xstate').TransitionsConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly description?: string;
        readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
        readonly target?: string | undefined;
        readonly version?: string;
        readonly exit?: import('xstate').Actions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly history?: "shallow" | "deep" | boolean | undefined;
        readonly states?: import('xstate').StatesConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly invoke?: readonly never[] | undefined;
        readonly entry?: import('xstate').Actions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
        readonly parent?: import('xstate').StateNode<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }> | undefined;
        readonly tags?: import('xstate').SingleOrArray<string> | undefined;
        readonly context: MatchMachineContext;
    }>;
    startMatch: () => import('xstate').Actor<import('xstate').StateMachine<MatchMachineContext, (Partial<MatchMachineContext> & {
        type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
    }) | {
        type: import("../../types").MatchEvent.HARVEST_CROP;
        playerId: import('../../types').IPlayer["id"];
        cropIdxInFieldToHarvest: number;
    } | {
        type: import("../../types").MatchEvent.INIT;
        playerSeeds: import('../../types').IPlayerSeed[];
        userPlayerId: string;
    } | {
        type: import("../../types").MatchEvent.RESUME;
        matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
        match: import('../../types').IMatch;
        botState: import('../../types').BotState;
        userPlayerId: string;
    } | {
        type: import("../../types").MatchEvent.START_TURN;
    } | {
        type: import("../../types").MatchEvent.SET_SHELL;
        shell: import('../../types').IShell;
    } | {
        type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
        cardIdxInHand: number;
        fieldIdxToPlace: number;
        playerId: import('../../types').IPlayer["id"];
    } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
        type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
        playerId: import('../../types').IPlayer["id"];
        cardIdxInField: number;
    } | {
        type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
        playerId: import('../../types').IPlayer["id"];
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
        playerId: import('../../types').IPlayer["id"];
        waterCardInHandIdx: number;
    } | {
        type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
        playerId: import('../../types').IPlayer["id"];
        waterCardInHandIdx: number;
        cropIdxInFieldToWater: number;
    } | {
        type: import("../../types").MatchEvent.OPERATION_ABORTED;
    } | {
        type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
    } | {
        type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
    } | {
        type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
    } | {
        type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
    }, {}, never, never, import('xstate').Values<{
        IS_BOT_PHASE_PLAYING_EVENTS: {
            type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
            params: unknown;
        };
        IS_BOT_PHASE_PLAYING_TOOLS: {
            type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
            params: unknown;
        };
        IS_SELECTED_IDX_VALID: {
            type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
            params: unknown;
        };
        IS_SETUP_PHASE: {
            type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
            params: unknown;
        };
    }>, never, {}, string, import('xstate').NonReducibleUnknown, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject, {
        readonly order?: number;
        readonly initial?: string | import('xstate').InitialTransitionConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly meta?: import('xstate').MetaObject | undefined;
        readonly output?: import('xstate').NonReducibleUnknown | import('xstate').Mapper<MatchMachineContext, import('xstate').DoneStateEvent<unknown>, import('xstate').NonReducibleUnknown, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }>;
        readonly id?: string | undefined;
        readonly always?: import('xstate').TransitionConfigOrTarget<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>;
        readonly after?: import('xstate').DelayedTransitions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never> | undefined;
        readonly on?: import('xstate').TransitionsConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly description?: string;
        readonly type?: "atomic" | "compound" | "parallel" | "final" | "history";
        readonly target?: string | undefined;
        readonly version?: string;
        readonly exit?: import('xstate').Actions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly history?: "shallow" | "deep" | boolean | undefined;
        readonly states?: import('xstate').StatesConfig<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, string, import('xstate').NonReducibleUnknown, import('xstate').EventObject, import('xstate').MetaObject> | undefined;
        readonly invoke?: readonly never[] | undefined;
        readonly entry?: import('xstate').Actions<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, undefined, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject> | undefined;
        readonly onDone?: string | import('xstate').SingleOrArray<import('xstate').TransitionConfig<MatchMachineContext, import('xstate').DoneStateEvent<unknown>, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }, never, never, import('xstate').Values<{
            IS_BOT_PHASE_PLAYING_EVENTS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_EVENTS;
                params: unknown;
            };
            IS_BOT_PHASE_PLAYING_TOOLS: {
                type: import("../../types").MatchStateGuard.IS_BOT_PHASE_PLAYING_TOOLS;
                params: unknown;
            };
            IS_SELECTED_IDX_VALID: {
                type: import("../../types").MatchStateGuard.IS_SELECTED_IDX_VALID;
                params: unknown;
            };
            IS_SETUP_PHASE: {
                type: import("../../types").MatchStateGuard.IS_SETUP_PHASE;
                params: unknown;
            };
        }>, never, import('xstate').EventObject, import('xstate').MetaObject>> | undefined;
        readonly parent?: import('xstate').StateNode<MatchMachineContext, (Partial<MatchMachineContext> & {
            type: import("../../types").MatchEvent.DANGEROUSLY_SET_CONTEXT;
        }) | {
            type: import("../../types").MatchEvent.HARVEST_CROP;
            playerId: import('../../types').IPlayer["id"];
            cropIdxInFieldToHarvest: number;
        } | {
            type: import("../../types").MatchEvent.INIT;
            playerSeeds: import('../../types').IPlayerSeed[];
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.RESUME;
            matchState: import("../../types").MatchState.WAITING_FOR_PLAYER_SETUP_ACTION | import("../../types").MatchState.WAITING_FOR_PLAYER_TURN_ACTION;
            match: import('../../types').IMatch;
            botState: import('../../types').BotState;
            userPlayerId: string;
        } | {
            type: import("../../types").MatchEvent.START_TURN;
        } | {
            type: import("../../types").MatchEvent.SET_SHELL;
            shell: import('../../types').IShell;
        } | {
            type: import("../../types").MatchEvent.SELECT_CARD_POSITION;
            cardIdxInHand: number;
            fieldIdxToPlace: number;
            playerId: import('../../types').IPlayer["id"];
        } | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_CROP> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_EVENT> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_PLANTABLE_TOOL> | import('../../types').PlayCardEventPayload<import("../../types").MatchEvent.PLAY_WATER> | {
            type: import("../../types").MatchEvent.DISCARD_CARD_FROM_FIELD;
            playerId: import('../../types').IPlayer["id"];
            cardIdxInField: number;
        } | {
            type: import("../../types").MatchEvent.PLAYER_RAN_OUT_OF_FUNDS;
            playerId: import('../../types').IPlayer["id"];
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
        } | {
            type: import("../../types").MatchEvent.SELECT_CROP_TO_WATER;
            playerId: import('../../types').IPlayer["id"];
            waterCardInHandIdx: number;
            cropIdxInFieldToWater: number;
        } | {
            type: import("../../types").MatchEvent.OPERATION_ABORTED;
        } | {
            type: import("../../types").MatchEvent.PROMPT_PLAYER_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.PROMPT_BOT_FOR_TURN_ACTION;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_INITIALIZED;
        } | {
            type: import("../../types").MatchEvent.BOT_TURN_PHASE_COMPLETE;
        }> | undefined;
        readonly tags?: import('xstate').SingleOrArray<string> | undefined;
        readonly context: MatchMachineContext;
    }>>;
    applyDailyEffects: (context: MatchMachineContext) => MatchMachineContext;
}
export declare const rules: RulesService;
