import { AlertColor } from '@mui/material/Alert/index.js';
import { ReactNode, SetStateAction } from 'react';
export interface ShellContextProps {
    /**
     * Prevents user interaction while some asynchronous operation is performed.
     */
    blockingOperation: (fn: () => Promise<void>) => Promise<void>;
    isHandInViewport: boolean;
    setIsHandInViewport: React.Dispatch<React.SetStateAction<boolean>>;
    showNotification: (message: ReactNode, severity: AlertColor) => void;
    selectedHandCardIdx: number;
    setSelectedHandCardIdx: React.Dispatch<SetStateAction<number>>;
}
export declare const ShellContext: import('react').Context<ShellContextProps>;
