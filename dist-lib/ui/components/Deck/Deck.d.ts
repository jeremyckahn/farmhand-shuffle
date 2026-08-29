import { BoxProps } from '@mui/material/Box';
import { MouseEventHandler } from 'react';
import { IMatch, IPlayer } from '../../../game/types';
import { CardSize } from '../../types';
export interface DeckProps extends BoxProps {
    match: IMatch;
    handleClickTopCard?: MouseEventHandler<HTMLDivElement>;
    isTopCardSelected?: boolean;
    playerId: IPlayer['id'];
    deckThicknessPx?: number;
    cardSize?: CardSize;
}
export declare const defaultDeckThicknessPx = 30;
export declare const defaultDeckCardSize = CardSize.MEDIUM;
export declare const Deck: ({ match, handleClickTopCard, isTopCardSelected, playerId, deckThicknessPx, cardSize, sx, ...rest }: DeckProps) => import("react/jsx-runtime").JSX.Element;
