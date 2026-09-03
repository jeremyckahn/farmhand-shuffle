import { default as React } from 'react';
import { CardViewProps } from './types';
export declare const cardClassName = "Card";
export declare const cardFlipWrapperClassName = "CardFlipWrapper";
export declare const CardCore: React.ForwardRefExoticComponent<Omit<CardViewProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
