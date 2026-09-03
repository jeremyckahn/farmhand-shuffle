import { IMatch, IPlayedCrop, IPlayedTool, IPlayer } from '../../types';
/**
 * NOTE: fieldIdxToPlace must not be -1
 */
export declare const addCardToField: (match: IMatch, playerId: IPlayer["id"], newCrop: IPlayedCrop | IPlayedTool, fieldIdxToPlace: number) => IMatch;
