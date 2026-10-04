import { BoxProps } from '@mui/material/Box';
import { IMatch, IPlayer } from '../../../game/types';
import { CardSize } from '../../types';
export declare const focusedFieldCardSize = CardSize.MEDIUM;
export interface FieldProps extends BoxProps {
    match: IMatch;
    playerId: IPlayer['id'];
    cardSize?: CardSize;
    /**
     * Called whenever the currently-selected field card index changes. Lets an
     * ancestor (e.g. Table.tsx) track this field's selection without owning it
     * -- selection itself stays fully internal to this component.
     */
    onSelectedCardIdxChange?: (idx: number) => void;
}
export declare const rotationTransform = "rotate(180deg)";
export declare const selectedCardLabel = "Selected field card";
export declare const unselectedCardLabel = "Unselected field card";
export declare const Field: ({ playerId, match, cardSize, onSelectedCardIdxChange, ...rest }: FieldProps) => import("react/jsx-runtime").JSX.Element;
