import { AlertColor } from '@mui/material/Alert/index.js';
import { ReactNode } from 'react';
export interface NotificationContextProps {
    showNotification: (message: ReactNode, severity?: AlertColor) => void;
}
