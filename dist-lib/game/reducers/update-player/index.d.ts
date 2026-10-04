import { IMatch, IPlayer } from '../../types';
export declare const updatePlayer: (match: IMatch, playerId: IPlayer["id"], newPlayerProperties: Partial<IPlayer>) => IMatch;
