import { AlertProps } from '@mui/material/Alert';
import { ReactNode } from 'react';
export interface SnackbarProps extends Pick<AlertProps, 'severity'> {
    message: ReactNode;
    onClose: () => void;
}
export declare const notificationDuration = 3000;
export declare const emptyNotificationMessage = "";
export declare const Snackbar: ({ message, severity, onClose }: SnackbarProps) => import("react/jsx-runtime").JSX.Element;
