import createSvgIcon from '@mui/material/utils/createSvgIcon.js'

// Hand-built equivalents of a handful of @mui/icons-material icons, using
// the exact same path data those packages ship (and @mui/material's own
// createSvgIcon helper, the same one @mui/icons-material uses internally).
//
// This deliberately avoids importing from @mui/icons-material directly:
// its files are published as CommonJS with no `"type": "module"` in its
// package.json, so they're unambiguously CJS by Node's own resolution
// rules. This package's dist-lib bundle is a real ESM (.mjs) file, and a
// plain `import X from 'cjs-pkg'` in a genuine ESM module, under strict
// Node-style CJS interop, binds the *whole* CJS exports namespace object
// (`{ default: Component }`) rather than unwrapping it to `Component` -
// only a bundler's lenient/Babel-style interop auto-unwraps that. Whether
// a consumer's bundler applies strict or lenient interop when it
// re-resolves that import (which it must, since @mui/icons-material is
// externalized - see vite.lib.config.mts) is outside this package's
// control, and at least one real bundler (Vite 8/rolldown, in both its
// classic-esbuild and rolldown-native modes) applies the strict
// interpretation, producing an invalid React element type at the crash
// site. Separately, @mui/icons-material's own internal `createSvgIcon`
// re-export uses a raw CJS `require("@mui/material/utils")` call that
// doesn't survive being bundled by rolldown (the same "require survives
// bundling" hazard already documented below for use-sync-external-store),
// so un-externalizing @mui/icons-material to sidestep the interop issue
// isn't a safe option either.
//
// @mui/material's own files (like this one) are real ESM with no such
// ambiguity, and are already relied on everywhere else in this package
// (Button, Tooltip, etc. all import cleanly the same way) - building
// these few icons directly against @mui/material's own createSvgIcon
// avoids depending on @mui/icons-material's CJS files at all.

export const AccountBalance = createSvgIcon(
  <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z" />,
  'AccountBalance'
)

export const AttachMoney = createSvgIcon(
  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
  'AttachMoney'
)

export const KeyboardArrowDown = createSvgIcon(
  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />,
  'KeyboardArrowDown'
)

export const KeyboardArrowUp = createSvgIcon(
  <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />,
  'KeyboardArrowUp'
)

export const Add = createSvgIcon(
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />,
  'Add'
)

export const Remove = createSvgIcon(<path d="M19 13H5v-2h14v2z" />, 'Remove')
