import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { LayoutGroup } from 'motion/react'

import { ICard, IGame } from '../../../game/types'
import { factory } from '../../../game/services/Factory'
import { uuidString } from '../../../services/types'

interface ICardAnimationContext {
  game: IGame
  cardInstancePool: CardInstance[]
  handleMount: (cardId: ICard['id']) => Promise<string>
  handleUnmount: (instanceId: uuidString) => void
}

interface CardAnimationProviderProps {
  children: ReactNode
  game: IGame
}

interface CardInstance {
  cardId: ICard['id']
  instanceId: uuidString
  isMounted: boolean
}

export const CardAnimationContext = createContext<ICardAnimationContext>({
  game: factory.buildGame(),
  cardInstancePool: [],
  handleMount: () => Promise.resolve(''),
  handleUnmount: () => {},
})

const initializeCardInstancePool = (game: IGame) => {
  return Object.values(game.table.players).reduce(
    (acc: CardInstance[], player) => {
      const playerCardIds = [
        ...player.deck,
        ...player.discardPile,
        ...player.hand,
        ...player.field.crops.map(({ id }) => id),
      ].sort()

      const playerCards = playerCardIds.map(
        (cardId): CardInstance => ({
          cardId,
          instanceId: uuid(),
          isMounted: false,
        })
      )

      acc = [...acc, ...playerCards]

      return acc
    },
    []
  )
}

export const CardAnimationProvider = ({
  children,
  game,
}: CardAnimationProviderProps) => {
  const [cardInstancePool, setCardInstancePool] = useState(() =>
    initializeCardInstancePool(game)
  )

  useEffect(() => {
    // FIXME: This is needed
    //setCardInstancePool(initializeCardInstancePool(game))
  }, [Object.keys(game.table.players).length])

  const handleMount: ICardAnimationContext['handleMount'] = async cardId => {
    return new Promise((resolve, reject) => {
      setCardInstancePool(previousCardInstancePool => {
        const availableInstanceIdx = previousCardInstancePool.findIndex(
          cardProxy => !cardProxy.isMounted && cardProxy.cardId === cardId
        )

        if (availableInstanceIdx === -1) {
          const error = new Error('No available card instances found')
          reject(error)
          throw error
        }

        const cardInstance = previousCardInstancePool[availableInstanceIdx]

        const newCardInstancePool: CardInstance[] = [
          ...previousCardInstancePool.slice(0, availableInstanceIdx),
          { ...cardInstance, isMounted: true },
          ...previousCardInstancePool.slice(availableInstanceIdx + 1),
        ]

        resolve(cardInstance.instanceId)

        return newCardInstancePool
      })
    })
  }

  const handleUnmount: ICardAnimationContext['handleUnmount'] = instanceId => {
    setCardInstancePool(previousCardInstancePool => {
      const mountedInstanceIdx = previousCardInstancePool.findIndex(
        cardProxy => cardProxy.instanceId === instanceId
      )

      if (mountedInstanceIdx === -1) {
        throw new Error('No matching card instances found')
      }

      const cardInstance = previousCardInstancePool[mountedInstanceIdx]

      const newCardInstancePool: CardInstance[] = [
        ...previousCardInstancePool.slice(0, mountedInstanceIdx),
        { ...cardInstance, isMounted: false },
        ...previousCardInstancePool.slice(mountedInstanceIdx + 1),
      ]

      return newCardInstancePool
    })
  }

  const contextValue = useMemo(
    (): ICardAnimationContext => ({
      game,
      cardInstancePool,
      handleMount,
      handleUnmount,
    }),
    [game, cardInstancePool, handleMount, handleUnmount]
  )

  return (
    <CardAnimationContext.Provider value={contextValue}>
      <LayoutGroup>{children}</LayoutGroup>
    </CardAnimationContext.Provider>
  )
}
