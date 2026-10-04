import { CropCardProps, EventCardProps, ToolCardProps, WaterCardProps } from './types';
export declare const CropCard: import('react').ForwardRefExoticComponent<Omit<CropCardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const WaterCard: import('react').ForwardRefExoticComponent<Omit<WaterCardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const EventCard: import('react').ForwardRefExoticComponent<Omit<EventCardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const ToolCard: import('react').ForwardRefExoticComponent<Omit<ToolCardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const Card: import('react').ForwardRefExoticComponent<(Omit<CropCardProps, "ref"> | Omit<WaterCardProps, "ref"> | Omit<EventCardProps, "ref"> | Omit<ToolCardProps, "ref">) & import('react').RefAttributes<HTMLDivElement>>;
