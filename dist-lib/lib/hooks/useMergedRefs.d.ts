import { MutableRefObject } from 'react';
/**
 * Returns a callback ref that assigns the rendered node to every given ref.
 * Pass `undefined` for a ref that should be conditionally skipped.
 *
 * The returned callback is stable across renders as long as the given refs
 * are, so React doesn't detach and reattach it (calling it with `null` and
 * then the node again) on every render the way it would an inline callback.
 */
export declare const useMergedRefs: <T>(...refs: Array<MutableRefObject<T | null> | undefined>) => (node: T | null) => void;
