export const isDebugEnabled =
  import.meta.env.DEV ||
  new URLSearchParams(window.location.search).has('debug')
