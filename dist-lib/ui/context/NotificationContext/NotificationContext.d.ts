import { ReactNode } from 'react';
import { NotificationContextProps } from './types';
export declare const NotificationContext: import('react').Context<NotificationContextProps>;
export declare const NotificationProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useNotification: () => NotificationContextProps;
