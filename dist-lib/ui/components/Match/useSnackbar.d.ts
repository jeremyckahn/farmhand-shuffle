import { AlertColor } from '@mui/material';
import { ReactNode } from 'react';
import { IMatch } from '../../../game/types';
import { ActorContext } from './ActorContext';
export declare const useSnackbar: ({ actorRef, match, useGenericPlayerLabels, }: {
    actorRef: ReturnType<typeof ActorContext.useActorRef>;
    match: IMatch;
    useGenericPlayerLabels?: boolean;
}) => {
    showNotification: (message: ReactNode, severity: AlertColor) => void;
};
