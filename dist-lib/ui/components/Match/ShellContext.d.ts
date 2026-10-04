import { AlertColor } from '@mui/material/Alert/index.js';
import { ReactNode, SetStateAction } from 'react';
export interface ShellContextProps {
    /**
     * Prevents user interaction while some asynchronous operation is performed.
     */
    blockingOperation: (fn: () => Promise<void>) => Promise<void>;
    isHandInViewport: boolean;
    setIsHandInViewport: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Whether the viewport is narrow (mobile-sized).
     */
    isNarrowViewport: boolean;
    showNotification: (message: ReactNode, severity: AlertColor) => void;
    selectedHandCardIdx: number;
    setSelectedHandCardIdx: React.Dispatch<SetStateAction<number>>;
    selectedFieldCardIdx: number;
    setSelectedFieldCardIdx: React.Dispatch<SetStateAction<number>>;
    /**
     * Whether a hand/field card is currently selected -- i.e. whether its
     * respective *CardIdx above is not deselectedCardIdx.
     */
    isHandCardSelected: boolean;
    isFieldCardSelected: boolean;
    /**
     * Whether the hand card selection must be preserved as-is. While a card
     * position is being chosen, the selected hand card is the card being
     * placed, so the Hand must not clear or change it in response to user
     * interaction until placement completes or is canceled.
     */
    isHandCardSelectionLocked: boolean;
    /**
     * The DOM node of the user's own Hand container. Lets Match navigate
     * between rendered cards (see handleCardNav in Match.tsx) via this
     * component-owned ref instead of a global document.querySelector.
     */
    handContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    /**
     * The DOM node of the user's own Field container (not any opponent's).
     * Same purpose as handContainerRef above.
     */
    fieldContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}
export declare const ShellContext: import('react').Context<ShellContextProps>;
