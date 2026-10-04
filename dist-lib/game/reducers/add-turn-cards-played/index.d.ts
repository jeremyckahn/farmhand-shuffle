import { CardInstance, IMatch, IPlayer } from '../../types';
export declare const addCardsPlayedDuringTurn: (match: IMatch, playerId: IPlayer["id"], cardInstances: CardInstance[]) => IMatch;
