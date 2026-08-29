import { GridProps } from '@mui/material/Grid';
import { IMatch } from '../../../game/types';
export interface TableProps extends GridProps {
    match: IMatch;
}
export declare const Table: ({ match, ...rest }: TableProps) => import("react/jsx-runtime").JSX.Element;
