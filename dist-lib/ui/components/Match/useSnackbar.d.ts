import { AlertColor } from '@mui/material';
import { ReactNode } from 'react';
import { IMatch } from '../../../game/types';
import { ActorContext } from './ActorContext';
export declare const useSnackbar: ({ actorRef, match, }: {
    actorRef: ReturnType<typeof ActorContext.useActorRef>;
    match: IMatch;
}) => {
    showNotification: (message: ReactNode, severity: AlertColor) => void;
};
