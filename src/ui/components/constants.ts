export const deselectedCardIdx = -1

// Shared with Match.tsx, TurnControl.tsx, and useSnackbar.ts - see
// MatchProps.useGenericPlayerLabels.
export const genericSelfPlayerLabel = 'You'
export const genericOpponentPlayerLabel = 'Opponent'

// CSS custom property that the placeholder outlines (empty Field plots and the
// empty DiscardPile) read their color from, falling back to the theme's
// divider color when unset. Match forces its own theme, so an embedding host
// can't restyle these through its theme - it can set this variable through
// Match's `sx` prop instead, e.g. to darken them against its own background.
export const placeholderOutlineColorVar =
  '--farmhand-shuffle-placeholder-outline-color'

export const getPlaceholderOutlineColor = (fallbackColor: string) =>
  `var(${placeholderOutlineColorVar}, ${fallbackColor})`
