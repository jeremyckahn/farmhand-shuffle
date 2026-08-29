import { BoxProps } from '@mui/material/Box';
import { IMatch, IPlayer } from '../../../game/types';
import { CardSize } from '../../types';
export interface FieldProps extends BoxProps {
    match: IMatch;
    playerId: IPlayer['id'];
    cardSize?: CardSize;
}
export declare const rotationTransform = "rotate(180deg)";
export declare const selectedCardLabel = "Selected field card";
export declare const unselectedCardLabel = "Unselected field card";
export declare const Field: ({ playerId, match, cardSize, ...rest }: FieldProps) => import("react/jsx-runtime").JSX.Element;
