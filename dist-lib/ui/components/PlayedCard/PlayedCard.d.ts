import { BoxProps } from '@mui/material/Box/index.js';
import { IPlayedCard } from '../../../game/types';
import { BaseCardProps } from '../Card/types';
export interface PlayedCropProps extends BoxProps {
    cardProps: BaseCardProps;
    playedCard: IPlayedCard;
    isInBackground: boolean;
}
export declare const unfilledWaterIndicatorOpacity = 0.25;
export declare const playedCardClassName = "PlayedCard";
export declare const PlayedCard: ({ isInBackground, playedCard, cardProps: { ref, ...cardProps }, ...props }: PlayedCropProps) => import("react/jsx-runtime").JSX.Element;
