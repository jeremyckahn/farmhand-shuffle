import { IMatch } from '../../../game/types';
export interface TurnControlProps {
    match: IMatch;
    useGenericPlayerLabels?: boolean;
}
export declare const TurnControl: ({ match, useGenericPlayerLabels, }: TurnControlProps) => import("react/jsx-runtime").JSX.Element;
