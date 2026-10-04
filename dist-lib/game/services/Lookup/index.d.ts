import { IMatch, IPlayedCard, IPlayer } from '../../types';
export declare class LookupService {
    getCardInstanceFromHand: (match: IMatch, playerId: IPlayer["id"], cardIdx: number) => import('../../types').CardInstance;
    /**
     * @throws InvalidCardError if card is not a CropInstance.
     */
    getCropFromHand(match: IMatch, playerId: IPlayer['id'], cardIdx: number): import('../../types').CropInstance;
    getPlayedCardFromField: (match: IMatch, playerId: IPlayer["id"], cardIdx: number) => IPlayedCard;
    /**
     * Returns all the IDs for players that are not the current user's.
     */
    getOpponentPlayerIds: (match: IMatch) => string[];
    getPlayer: (match: IMatch, playerId: IPlayer["id"]) => IPlayer;
    findCropIndexesInDeck: (match: IMatch, playerId: IPlayer["id"], howMany?: number) => number[];
    findCropIndexesInPlayerHand: (match: IMatch, playerId: IPlayer["id"]) => number[];
    findWaterIndexesInPlayerHand: (match: IMatch, playerId: IPlayer["id"]) => number[];
    findEventIndexesInPlayerHand: (match: IMatch, playerId: IPlayer["id"]) => number[];
    findToolIndexesInPlayerHand: (match: IMatch, playerId: IPlayer["id"]) => number[];
    playerIds: (match: IMatch) => string[];
    nextPlayerIndex: (match: IMatch) => number;
    fullPlots: (match: IMatch, playerId: IPlayer["id"]) => IPlayedCard[];
}
export declare const lookup: LookupService;
