import { IField, IMatch, IPlayer } from '../../types';
export declare const updateField: (match: IMatch, playerId: IPlayer["id"], newFieldProperties: Partial<IField>) => IMatch;
