import { createContext, ReactNode, useMemo } from 'react'

import { IGame } from '../../../game/types'
import { factory } from '../../../game/services/Factory'

interface ICardAnimationContext {
  game: IGame
}

interface CardAnimationProviderProps {
  children: ReactNode
  game: IGame
}

export const CardAnimationContext = createContext<ICardAnimationContext>({
  game: factory.buildGame(),
})

export const CardAnimationProvider = ({
  children,
  game,
}: CardAnimationProviderProps) => {
  const contextValue = useMemo(
    (): ICardAnimationContext => ({
      game,
    }),
    [game]
  )

  return (
    <CardAnimationContext.Provider value={contextValue}>
      {children}
    </CardAnimationContext.Provider>
  )
}
