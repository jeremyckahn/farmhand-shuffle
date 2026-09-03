import { default as React, Component, ErrorInfo, ReactNode } from 'react';
interface Props {
    children?: ReactNode;
}
interface State {
    hasError: boolean;
}
export declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(_: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
