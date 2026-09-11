import { RefObject, useEffect, useState } from 'react'

/**
 * Tracks the current content-box width of the element `ref` is attached to,
 * via ResizeObserver.
 *
 * Deliberately not `useMediaQuery`/`window.innerWidth`-based: those measure
 * the browser viewport, not any particular element's actual rendered size.
 * When this package is embedded inside a host app that gives it less than
 * the full viewport width (e.g. alongside a sidebar), viewport-based
 * breakpoints report more room than genuinely exists, causing
 * layout meant for a wide viewport to render in a narrow one.
 */
export const useContainerWidth = (ref: RefObject<HTMLElement | null>) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new ResizeObserver(entries => {
      const entry = entries[0]

      if (entry) {
        setWidth(entry.contentRect.width)
      }
    })

    observer.observe(el)

    return () => observer.disconnect()
  }, [ref])

  return width
}
