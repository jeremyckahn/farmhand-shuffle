import { MutableRefObject, useCallback } from 'react'

/**
 * Returns a callback ref that assigns the rendered node to every given ref.
 * Pass `undefined` for a ref that should be conditionally skipped.
 *
 * The returned callback is stable across renders as long as the given refs
 * are, so React doesn't detach and reattach it (calling it with `null` and
 * then the node again) on every render the way it would an inline callback.
 */
export const useMergedRefs = <T>(
  ...refs: Array<MutableRefObject<T | null> | undefined>
) =>
  useCallback(
    (node: T | null) => {
      refs.forEach(ref => {
        if (ref) {
          // eslint-disable-next-line functional/immutable-data
          ref.current = node
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  )
