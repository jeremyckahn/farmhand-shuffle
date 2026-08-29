import { DeckBuilderProps } from './types';
type UseDeckBuilderProps = Pick<DeckBuilderProps, 'onDone'>;
export declare const groupedCards: {
    crops: import('../../../game/types').ICrop[];
    water: import('../../../game/types').IWater[];
    tools: import('../../../game/types').ITool[];
    events: import('../../../game/types').IEvent[];
};
export declare const sortedCards: (import('../../../game/types').ICrop | import('../../../game/types').ITool | import('../../../game/types').IEvent | import('../../../game/types').IWater)[];
export declare const useDeckBuilder: ({ onDone }: UseDeckBuilderProps) => {
    groupedCards: {
        crops: import('../../../game/types').ICrop[];
        water: import('../../../game/types').IWater[];
        tools: import('../../../game/types').ITool[];
        events: import('../../../game/types').IEvent[];
    };
    sortedCards: (import('../../../game/types').ICrop | import('../../../game/types').ITool | import('../../../game/types').IEvent | import('../../../game/types').IWater)[];
    quantities: Record<string, number>;
    totalCards: number;
    handleQuantityChange: (cardId: string) => (action: React.SetStateAction<number>) => void;
    handleDone: () => void;
    isDeckValid: boolean;
};
export {};
