import { IPlayer } from '../../types';
export declare class PlayerOutOfFundsError extends Error {
    readonly playerId: IPlayer['id'];
    constructor(playerId: IPlayer['id']);
}
export declare class PlayerOutOfCropsError extends Error {
    constructor(playerId: IPlayer['id']);
}
export declare class MatchStateCorruptError extends Error {
    constructor(message: string);
}
export declare class GameStateCorruptError extends Error {
    constructor(message: string);
}
export declare class FieldFullError extends Error {
    constructor(playerId: IPlayer['id']);
}
export declare class InvalidCardIndexError extends Error {
    constructor(cardIdx: number, playerId: string);
}
export declare class InvalidCardError extends Error {
    constructor(message: string);
}
export declare class InvalidIdError extends Error {
    constructor(message: string);
}
export declare class PlayerNotFoundError extends Error {
    constructor(playerId: IPlayer['id']);
}
export declare class PlayerAbortError extends Error {
    constructor();
}
export declare class UnimplementedError extends Error {
    constructor(message: string);
}
