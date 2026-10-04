# UI directory

This directory implements the Farmhand Shuffle UI. It is concerned
with the user experience and presentation of the game.

## Pixel art styling

The UI has a retro pixel art look that matches the game's card art. It's built with some nonstandard techniques, so read this before changing UI styling, icons or fonts. The same approach is used in [Farmhand](https://github.com/jeremyckahn/farmhand) (see its `doc/adr/0007-pixel-art-ui-theme.md`).

### Frames: 9-slice `border-image` with generated SVG sprites

`src/lib/styling/pixel.ts` draws frames with CSS 9-slice scaling (`border-image`).

- **Sprites:** each frame is a tiny SVG sprite (3×3 or 4×4 art pixels), generated at runtime from a text pixel map by `pixelArtUrl()` and inlined as a data URI. For example:

  ```
  .O..    O = outline color
  O.OD    D = drop shadow
  .ODD    . = transparent
  .DD.
  ```

- **Scaling:** the browser slices the sprite into corners, edges and a center. Corners render at a fixed size and edges stretch, so a frame fits any element while every art pixel stays exactly `PIXEL_SIZE` (3) CSS pixels. `px(n)` converts art pixels to CSS.
- **Colors:** the sprites are generated SVGs, so their colors come from the palette at runtime. `pixelFrameSx({ outline, shadow })` returns the `sx` styles for a frame:
  - `shadow: true` adds a hard drop shadow inside the right and bottom border slices.
  - `shadow: 'pressed'` keeps that space but leaves it empty, so a pressed control doesn't change size.
- **What the sprite holds:** only the outline, the notched corners and the shadow. The element's own background fills the interior because it's clipped to the padding box (`backgroundClip: 'padding-box'`), which keeps the corners and shadow transparent.
- **Bevel:** the light/dark bevel is an inset `box-shadow` from `pixelBevel()`, so background colors can change freely without regenerating any images.
- **Glows:** soft glows (`drop-shadow(0 0 Npx color)`) are replaced by `pixelOutlineFilter(color)`, a crisp outline that follows an element's shape. Card states (waterable, harvestable) use it, and so does card art. The buffed crop's rainbow border (`src/lib/styling/rainbow-border.ts`) uses hard-edged color bands with no blur.

### Theme

`src/ui/theme.ts` builds both `lightTheme` and `darkTheme` with the same pixel art overrides:

- **Global:**
  - `shape.borderRadius` is `0`.
  - Every `shadows` elevation is a hard, unblurred shadow; higher elevations cast longer ones.
  - Button ripples are square.
- **Framed surfaces:** every `Paper` gets a frame, which covers cards, the deck builder, the turn control accordion, alerts and dialogs. Tooltips have their own frame.
- **Buttons:**
  - **Contained** buttons and Fabs get a raised frame that's pushed into its shadow while pressed. Fabs are square.
  - **Outlined** buttons get a colored frame.
  - **Text** buttons get an invisible frame of the same size, so they line up with framed buttons.
  - Outline colors are a darkened shade of the palette color.

### Icons

`src/ui/components/PixelIcon` replaces `@mui/icons-material`, which is no longer a dependency.

- **Drawing format:** icons are 12×12 text pixel maps. `#` is a solid pixel, `+` is a half-tone pixel (same color, reduced opacity) and anything else is transparent.
- **Rendering:** `createPixelIcon(rows, name)` renders the map as an MUI `SvgIcon`. The result is a drop-in replacement for an `@mui/icons-material` icon:
  - It takes the same props.
  - It forwards refs, which a Tooltip needs when an icon is its direct child.
  - It's colored with `currentColor`.
  - It has a `data-testid` of `${name}Icon`.
- **Built-in icons:** MUI's Alert severity icons are replaced through the theme's `defaultProps`.

### Fonts

- **Families:** text uses the Jersey pixel font family through two logical families, set in `fonts` in `src/ui/theme.ts`:
  - **"Farmhand Display"** (Jersey 10): headings, buttons and overlines.
  - **"Farmhand Body"** (Jersey 20, with Jersey 25 as its bold): everything else.
- **Declaration:** the faces are declared in `src/ui/styles/fonts.ts` and injected through `CssBaseline`, rather than by importing the @fontsource CSS. That lets each face set `size-adjust`, which matches its cap height to Roboto's (the font it replaced) so text sizes stay the same.
- **No faux styles:** `font-synthesis: none` stops the browser from faking bold or italics, which would smear the pixel grid.

### Rules to follow

- **Use `backgroundColor`, not `background`,** to recolor anything with a pixel frame, including cards and other `Paper`. The `background` shorthand resets `background-clip`, which paints the color under the transparent corners and drop shadow.
- **Don't add rounded corners or blurred shadows, glows or filters** to UI chrome. Use `pixelFrameSx`, `pixelBevel`, `pixelOutlineFilter`, `pixelDropShadowFilter`, or the theme's `shadows`.
- **Don't enable `arrow` on Tooltips.** MUI's arrow is a rotated square that doesn't fit the pixel frame.
- **Import icons from `src/ui/components/PixelIcon`,** not `@mui/icons-material`. To add one, draw a 12×12 map in `icons.ts` and wrap it with `createPixelIcon`.
- **When changing typefaces,** measure the new font's cap height and set its `size-adjust` so it matches the existing faces. Faces of one family must use exactly the same `font-weight` values.

### Library consumers

The library (`src/public`) exports `Match`, which relies on the host app's MUI theme. Styles set directly on components (card frames, state outlines, icons) come along. Theme-level styling (fonts, button and Paper frames, tooltips) only applies if the host uses this theme.
