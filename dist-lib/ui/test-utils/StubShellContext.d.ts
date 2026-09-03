import { ReactNode } from 'react';
import { Mock } from 'vitest';
import { ShellContextProps } from '../components/Match/ShellContext';
export declare const mockShowNotification: Mock<import('@vitest/spy').Procedure> | (() => void);
export declare const StubShellContext: ({ children, useVitestMocks, ...overrides }: {
    children: ReactNode;
    useVitestMocks?: boolean;
    mockImplementation?: Mock;
} & Partial<ShellContextProps>) => import("react/jsx-runtime").JSX.Element;
