import { default as React } from 'react';
import { ICard } from '../../../game/types';
interface DeckBuilderSectionProps {
    title: string;
    cards: ICard[];
    isLast: boolean;
    quantities: Record<string, number>;
    onQuantityChange: (cardId: string) => (action: React.SetStateAction<number>) => void;
    totalCards: number;
    disabled?: boolean;
}
export declare const DeckBuilderSection: ({ title, cards, isLast, quantities, onQuantityChange, totalCards, disabled, }: DeckBuilderSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
