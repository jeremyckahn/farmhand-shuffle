import { createContext, ReactNode, useMemo } from 'react'

import { IGame } from '../../../game/types'
import { factory } from '../../../game/services/Factory'

interface ICardAnimationContext {
  game: IGame
}

const CardAnimationContext = createContext<ICardAnimationContext>({
  game: factory.buildGame(),
})

interface CardAnimationProviderProps {
  children: ReactNode
  game: IGame
}

export const CardAnimationProvider = ({
  children,
  game,
}: CardAnimationProviderProps) => {
  const contextValue = useMemo(() => ({ game }), [game])

  return (
    <CardAnimationContext.Provider value={contextValue}>
      {children}
    </CardAnimationContext.Provider>
  )
}
