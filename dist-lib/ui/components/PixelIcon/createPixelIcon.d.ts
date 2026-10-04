import { SvgIconProps } from '@mui/material/SvgIcon';
import { default as React } from 'react';
import { PixelMap } from './types';
/**
 * Mirrors a pixel map horizontally.
 */
export declare const flipX: (rows: PixelMap) => PixelMap;
/**
 * Mirrors a pixel map vertically.
 */
export declare const flipY: (rows: PixelMap) => PixelMap;
/**
 * Rotates a square pixel map 90 degrees clockwise.
 */
export declare const rotate: (rows: PixelMap) => PixelMap;
/**
 * Creates an MUI SvgIcon component from a pixel map. The result is a drop-in
 * replacement for an @mui/icons-material icon: it takes the same props,
 * forwards refs to the underlying <svg> (which a Tooltip needs to position
 * itself when the icon is its direct child), is colored with `currentColor`,
 * and has a `data-testid` of `${name}Icon`.
 */
export declare const createPixelIcon: (rows: PixelMap, name: string) => React.ForwardRefExoticComponent<Omit<SvgIconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
