import { IMatch } from '../../types';
export declare const updateMatch: (match: IMatch, newMatchProperties: Partial<IMatch>) => {
    sessionOwnerPlayerId: import('../../types').IPlayer["id"];
    table: import('../../types').ITable;
    turn: number;
    currentPlayerId: import('../../types').IPlayer["id"] | null;
    buffedCrop: import('../../types').ICropPriceFluctuation | null;
    nerfedCrop: import('../../types').ICropPriceFluctuation | null;
    cardsToDrawAtTurnStart: number;
    eventCardsThatCanBePlayed: number;
    selectedWaterCardInHandIdx: number;
    winner: import('../../types').IPlayer["id"] | null;
};
