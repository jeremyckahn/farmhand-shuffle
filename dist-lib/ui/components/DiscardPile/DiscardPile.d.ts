import { BoxProps } from '@mui/material/Box';
import { IMatch, IPlayer } from '../../../game/types';
import { CardSize } from '../../types';
export interface DiscardPileProps extends BoxProps {
    match: IMatch;
    playerId: IPlayer['id'];
    cardSize?: CardSize;
    discardPileThicknessPx?: number;
}
export declare const defaultDiscardPileThicknessPx = 30;
export declare const defaultDiscardPileCardSize = CardSize.SMALL;
export declare const DiscardPile: ({ playerId, match, cardSize, discardPileThicknessPx, ...rest }: DiscardPileProps) => import("react/jsx-runtime").JSX.Element;
