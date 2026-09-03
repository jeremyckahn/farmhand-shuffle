import { IMatch, IPlayer } from '../../types';
export declare const startTurn: (match: IMatch, playerId: IPlayer["id"], cardsToDraw?: number) => IMatch;
