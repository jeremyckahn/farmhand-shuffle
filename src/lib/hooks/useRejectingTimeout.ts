import { useEffect, useRef } from 'react'

// NOTE: Provides await-able timeouts that get rejected when the component
// unmounts. Useful for component animations that need to be cancelled if the
// component unmounts before they complete (use it in a try/catch).
export const useRejectingTimeout = () => {
  const timeoutPool = useRef(
    new Map<ReturnType<typeof setTimeout>, () => void>()
  )

  useEffect(() => {
    const { current } = timeoutPool

    return () => {
      current.forEach(reject => {
        reject()
      })
    }
  }, [])

  const setRejectingTimeout = (delay: number) => {
    return new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        // eslint-disable-next-line functional/immutable-data
        timeoutPool.current.delete(timeout)

        resolve()
      }, delay)

      // eslint-disable-next-line functional/immutable-data
      timeoutPool.current.set(timeout, reject)
    })
  }

  return { setRejectingTimeout }
}
