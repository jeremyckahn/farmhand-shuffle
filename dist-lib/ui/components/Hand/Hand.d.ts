import { BoxProps } from '@mui/material/Box/index.js';
import { IMatch, IPlayer } from '../../../game/types';
import { CardSize } from '../../types';
export declare const getGapPixelWidth: (numberOfCards: number) => 3 | 5 | 50 | 10 | 30 | 15;
export interface HandProps extends BoxProps {
    match: IMatch;
    playerId: IPlayer['id'];
    cardSize?: CardSize;
}
export declare const Hand: ({ playerId, match, cardSize, sx, ...rest }: HandProps) => import("react/jsx-runtime").JSX.Element;
