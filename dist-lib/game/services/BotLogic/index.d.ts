import { IMatch } from '../../types';
export declare class BotLogicService {
    getNumberOfCropCardsToPlay(match: IMatch, playerId: string, { minimumCropsToPlay }?: {
        minimumCropsToPlay?: number;
    }): number;
    getNumberOfEventCardsToPlay(match: IMatch, playerId: string): number;
    getNumberOfToolCardsToPlay(match: IMatch, playerId: string): number;
    getEventCardIndexToPlay(match: IMatch, playerId: string): number | undefined;
    getToolCardIndexToPlay(match: IMatch, playerId: string): number | undefined;
    getCropCardIndicesToWater(match: IMatch, playerId: string): number[];
    getCropCardIndicesToHarvest(match: IMatch, playerId: string): number[];
    getOpenFieldPosition(match: IMatch, playerId: string): number | undefined;
}
export declare const botLogic: BotLogicService;
