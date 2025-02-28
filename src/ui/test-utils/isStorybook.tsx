// NOTE: This needs to be in a separate file as part of a workaround for this
// issue:
// https://github.com/storybookjs/builder-vite/issues/570#issuecomment-1824504498
export const isStorybook = Boolean(import.meta.env.IS_STORYBOOK)
