import { Theme } from '@mui/material/styles';
/**
 * The size, in CSS pixels, of one "art pixel" in the UI chrome.
 */
export declare const PIXEL_SIZE = 3;
/**
 * Converts a number of art pixels into a CSS length.
 */
export declare const px: (units: number) => string;
/**
 * Converts a pixel map into a CSS `url()` for an SVG data URI. Each string in
 * `rows` is one row of pixels, and each character is a key of `palette`. A
 * `.` is a transparent pixel.
 */
export declare const pixelArtUrl: (rows: readonly string[], palette: Record<string, string>) => string;
/**
 * The border widths of a frame drawn with `shadow: true` (or `'pressed'`).
 * Useful for positioning decorations, such as glows, outside the frame.
 */
export declare const shadowedFrameWidths: {
    readonly top: string;
    readonly right: string;
    readonly bottom: string;
    readonly left: string;
};
export declare const pixelShadowColor = "rgba(0, 0, 0, 0.3)";
/**
 * The outline color for framed surfaces (cards, panels, dialogs, etc.).
 */
export declare const surfaceOutline: (theme: Theme) => string;
/**
 * A hard (unblurred) drop shadow offset by one art pixel, for use as a
 * `box-shadow` on rectangular elements.
 */
export declare const pixelBoxShadow: string;
/**
 * The length, in art pixels, of the hard drop shadow for an MUI elevation:
 * one art pixel for every four levels of elevation, up to four.
 */
export declare const elevationShadowLength: (elevation: number) => number;
/**
 * Returns the `box-shadow` for a surface framed with `shadow: true`: the
 * bevel, plus a longer drop shadow for higher elevations.
 *
 * The frame's sprite already draws the first art pixel of the drop shadow
 * inside its border, so only the rest is drawn here, as a hard box-shadow
 * cast from the outside of the border. The two meet in a stepped, pixel art
 * shadow.
 */
export declare const pixelSurfaceShadow: (elevation: number) => string;
export interface PixelFrameOptions {
    /**
     * The outline color.
     */
    outline: string;
    /**
     * Whether to render a hard drop shadow. When this is `'pressed'`, space
     * for the shadow is preserved (so the element's size doesn't change) but
     * the shadow itself is not drawn. Pair that with `pixelPressedSx`.
     */
    shadow?: boolean | 'pressed';
}
/**
 * Returns sx styles that render a scalable 9-slice pixel art frame around an
 * element.
 *
 * NOTE: Override the framed element's color with `backgroundColor`, not the
 * `background` shorthand. The shorthand resets `backgroundClip`, which paints
 * the color under the frame's transparent corners and drop shadow.
 */
export declare const pixelFrameSx: ({ outline, shadow, }: PixelFrameOptions) => {
    readonly borderStyle: "solid";
    readonly borderColor: "transparent";
    readonly borderWidth: string;
    readonly borderRadius: 0;
    readonly borderImageSource: string;
    readonly borderImageSlice: "1" | "1 2 2 1";
    readonly borderImageWidth: string;
    readonly borderImageRepeat: "stretch";
    readonly backgroundClip: "padding-box";
};
/**
 * Returns a `box-shadow` value that draws a one-art-pixel bevel inside an
 * element: a light edge on the top and left, and a dark edge on the bottom
 * and right.
 */
export declare const pixelBevel: ({ highlight, lowlight, }?: {
    highlight?: string;
    lowlight?: string;
}) => string;
/**
 * Inverted bevel for pressed/active controls.
 */
export declare const pixelBevelPressed: string;
/**
 * Styles for the pressed state of a control framed with `shadow: true`. The
 * control shifts into the space its shadow occupied, so it appears to be
 * pushed down.
 */
export declare const pixelPressedSx: (outline: string) => {
    transform: string;
    boxShadow: string;
    borderStyle: "solid";
    borderColor: "transparent";
    borderWidth: string;
    borderRadius: 0;
    borderImageSource: string;
    borderImageSlice: "1" | "1 2 2 1";
    borderImageWidth: string;
    borderImageRepeat: "stretch";
    backgroundClip: "padding-box";
};
