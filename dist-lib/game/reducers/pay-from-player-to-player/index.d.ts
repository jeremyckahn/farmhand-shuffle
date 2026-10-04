import { IMatch, IPlayer } from '../../types';
export declare const payFromPlayerToPlayer: (match: IMatch, amount: number, sourcePlayerId: IPlayer["id"], targetPlayerId: IPlayer["id"]) => IMatch;
