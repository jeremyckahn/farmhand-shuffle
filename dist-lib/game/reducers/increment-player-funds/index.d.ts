import { IMatch, IPlayer } from '../../types';
export declare const incrementPlayerFunds: (match: IMatch, playerId: IPlayer["id"], 
/**
 * This number can be negative to perform a decrement of funds.
 */
amount: number) => IMatch;
