import { IMatch, IPlayedCrop, IPlayer } from '../../types';
export declare const updatePlayedCrop: (match: IMatch, playerId: IPlayer["id"], cropIdx: number, newPlayedCropProperties: Partial<IPlayedCrop>) => IMatch;
