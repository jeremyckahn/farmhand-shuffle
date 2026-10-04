import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
export declare const rotatingShadow: import('@emotion/serialize').Keyframes;
export interface BorderWidths {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
export declare const getRainbowBorderStyle: ({ theme, prefersReducedMotion, spread, borderWidths, }: {
    theme: Theme;
    prefersReducedMotion: boolean;
    spread?: number;
    /**
     * The element's border widths, so the rainbow is drawn outside of its
     * border (such as a pixel art frame) rather than hidden behind it.
     */
    borderWidths?: BorderWidths;
}) => SystemStyleObject<Theme>;
