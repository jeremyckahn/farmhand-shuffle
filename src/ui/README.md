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
- **Elevation:** the frame's sprite draws a one-art-pixel drop shadow. For higher elevations, `pixelSurfaceShadow(elevation)` adds the bevel plus a hard `box-shadow` outside the border, so the shadow steps out further (selected cards are raised this way). Anything that sets its own `boxShadow` on a framed `Paper` must use it, or the Paper's `elevation` stops having any effect.
- **Glows stay soft:** glow effects are intentionally not pixelated. These include card state glows (waterable, harvestable), the glow around card art, the selectable field plot glow and the buffed crop's animated rainbow border (`src/lib/styling/rainbow-border.ts`). They read as light rather than as UI chrome, so they keep their smooth, blurred look. Pass the frame's border widths (`shadowedFrameWidths`) to `getRainbowBorderStyle` so the rainbow ring is drawn outside the frame instead of behind it.

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

- **Drawing format:** icons are text pixel maps, usually 12×12 so each art pixel is 2 CSS pixels at MUI's default 24px icon size. The Alert severity icons use a coarser 8×8 grid, so their art pixels are 3 CSS pixels and match the frame around the alert. `#` is a solid pixel, `+` is a half-tone pixel (same color, reduced opacity) and anything else is transparent.
- **Rendering:** `createPixelIcon(rows, name)` renders the map as an MUI `SvgIcon`. The result is a drop-in replacement for an `@mui/icons-material` icon:
  - It takes the same props.
  - It forwards refs, which a Tooltip needs when an icon is its direct child.
  - It's colored with `currentColor`.
  - It has a `data-testid` of `${name}Icon`.
- **Built-in icons:** MUI's Alert severity icons are replaced with `alertIconMapping`, both through the theme's `defaultProps` and directly on the notification `Snackbar`, so notifications keep their pixel icons under any host theme.

### Fonts

- **Families:** text uses the Jersey pixel font family through two logical families, set in `fonts` in `src/ui/theme.ts`:
  - **"Farmhand Display"** (Jersey 10): headings, buttons and overlines.
  - **"Farmhand Body"** (Jersey 20, with Jersey 25 as its bold): everything else.
- **Declaration:** the faces are declared in `src/ui/styles/fonts.ts` and injected through `CssBaseline`, rather than by importing the @fontsource CSS. That lets each face set `size-adjust`, which matches its cap height to Roboto's (the font it replaced) so text sizes stay the same.
- **No faux styles:** `font-synthesis: none` stops the browser from faking bold or italics, which would smear the pixel grid.

### Rules to follow

- **Use `backgroundColor`, not `background`,** to recolor anything with a pixel frame, including cards and other `Paper`. The `background` shorthand resets `background-clip`, which paints the color under the transparent corners and drop shadow.
- **Don't add rounded corners or blurred drop shadows** to UI chrome (panels, buttons, tooltips). Use `pixelFrameSx`, `pixelBevel` or the theme's `shadows`. Glow effects are the exception (see above).
- **Don't enable `arrow` on Tooltips.** MUI's arrow is a rotated square that doesn't fit the pixel frame.
- **Import icons from `src/ui/components/PixelIcon`,** not `@mui/icons-material`. To add one, draw a map in `icons.ts` and wrap it with `createPixelIcon`.
- **When changing typefaces,** measure the new font's cap height and set its `size-adjust` so it matches the existing faces. Faces of one family must use exactly the same `font-weight` values.

### Library consumers

The library (`src/public`) exports `Match` along with `lightTheme` and `darkTheme`. `Match` relies on the host app's MUI theme:

- **Always applied:** styles set directly on components, such as card frames, glows and icons.
- **Only with an exported theme:** theme-level styling (fonts, button and Paper frames, tooltips) applies when the host wraps `Match` in `lightTheme` or `darkTheme`.
- **Fonts:** the font faces are injected by `CssBaseline`, so the host needs to render it too.
- **Font files:** the library build inlines image assets, but not fonts. A plugin in `vite.lib.config.mts` emits each font to `dist-lib/assets` and references it with `new URL(..., import.meta.url)`, which keeps about 95 kB of base64 out of the JavaScript bundle. The host's bundler copies the font files along with everything else.
