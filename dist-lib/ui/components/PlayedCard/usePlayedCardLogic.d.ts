import { IPlayedCard } from '../../../game/types';
export declare const usePlayedCardLogic: ({ playedCard, }: {
    playedCard: IPlayedCard;
}) => {
    canBeWatered: boolean;
    canBeHarvested: boolean;
    waterIconsToRender: number;
};
