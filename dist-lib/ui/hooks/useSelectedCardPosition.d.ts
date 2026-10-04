import { CardSize } from '../types';
export declare const foregroundCardZIndex = 20;
export declare const useSelectedCardPosition: ({ cardSize, }: {
    cardSize: CardSize;
}) => {
    containerRef: import('react').MutableRefObject<HTMLDivElement | null>;
    selectedCardTransform: string;
    selectedCardSxProps: import('@mui/system').SystemCssProperties<{}> | import('@mui/system').CSSSelectorObjectOrCssVariables<{}>;
};
