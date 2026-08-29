import { IMatch, IPlayer } from '../../types';
export declare const moveCardFromHandToField: (match: IMatch, playerId: IPlayer["id"], cardIdxInHand: number, fieldIdxToPlace: number) => IMatch;
