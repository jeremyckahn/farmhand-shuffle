import { useEffect, useRef } from 'react'

// NOTE: Provides await-able timeouts that get rejected when the component
// unmounts. Useful for component animations that need to be cancelled if the
// component unmounts before they complete (use it in a try/catch).
export const useRejectingTimeout = () => {
  const timeoutPool = useRef(new Map<NodeJS.Timeout, () => void>())

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
        timeoutPool.current.delete(timeout)

        resolve()
      }, delay)

      timeoutPool.current.set(timeout, reject)
    })
  }

  return { setRejectingTimeout }
}
