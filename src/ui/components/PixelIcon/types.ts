// Pixel art icons are authored as small text pixel maps:
//
//   `#` is a solid pixel
//   `+` is a half-tone pixel (the same color at reduced opacity)
//   anything else is transparent
//
// Every pixel map in an icon set should be the same size so icons line up
// with each other.
export type PixelMap = readonly string[]
