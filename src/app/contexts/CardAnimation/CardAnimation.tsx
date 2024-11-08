import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import * as cards from '../../../game/cards'
import { ICard, IGame } from '../../../game/types'
import { factory } from '../../../game/services/Factory'
import { Card } from '../../components/Card'
import { isCardId } from '../../../game/types/guards'
import { UnimplementedError } from '../../../game/services/Rules/errors'
import { uuidString } from '../../../services/types'

interface CardProxy {
  cardId: ICard['id']
  /**
   * If instanceId is null, the card is unmounted
   */
  instanceId: uuidString | null
  rotateX: number
  rotateY: number
  scale: number
  x: number
  y: number
}

type CardProxyCache = CardProxy[]

interface ICardAnimationContext {
  game: IGame
  cardProxyCache: CardProxyCache
  mountProxy: (cardId: ICard['id'], instanceId: uuidString) => void
  unmountProxy: (cardId: ICard['id'], instanceId: uuidString) => void
  updateProxy: (cardProxy: CardProxy) => void
}

interface CardAnimationProviderProps {
  children: ReactNode
  game: IGame
}

const createCardProxy = (cardId: ICard['id']): CardProxy => ({
  cardId,
  instanceId: null,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  x: 0,
  y: 0,
})

export const CardAnimationContext = createContext<ICardAnimationContext>({
  game: factory.buildGame(),
  cardProxyCache: [],
  mountProxy: () => {},
  unmountProxy: () => {},
  updateProxy: () => {},
})

const CardProxies = ({
  cardProxyCache,
}: {
  cardProxyCache: CardProxyCache
}) => {
  const theme = useTheme()

  return (
    <Box className="CardProxies" position="absolute" top={0} left={0}>
      {cardProxyCache.map((cardProxy, idx) => {
        const { cardId } = cardProxy

        if (!isCardId(cardId)) {
          throw new UnimplementedError(`${cardId} is not a card`)
        }

        const card = cards[cardId]

        const { x, y, rotateX, rotateY, scale } = cardProxy

        return (
          <Box
            key={`${cardId}-${idx}`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <Card
              card={card}
              isProxy
              sx={{
                transition: theme.transitions.create(['transform']),
                transform: `translateX(${x}px) translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}) scale(${scale})`,
              }}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export const CardAnimationProvider = ({
  children,
  game,
}: CardAnimationProviderProps) => {
  const [cardProxyCache, setCardProxyCache] = useState<CardProxyCache>(() => {
    const newCardProxyCache: CardProxyCache = Object.values(
      game.table.players
    ).reduce((acc: CardProxyCache, player) => {
      const playerCardIds = [
        ...player.deck,
        ...player.discardPile,
        ...player.hand,
        ...player.field.crops.map(({ id }) => id),
      ].sort()

      const playerCards = playerCardIds.map(
        (cardId): CardProxy => createCardProxy(cardId)
      )

      acc = [...acc, ...playerCards]

      return acc
    }, [])

    return newCardProxyCache
  })

  const updateProxy: ICardAnimationContext['updateProxy'] = ({
    instanceId,
    rotateX,
    rotateY,
    scale,
    x,
    y,
  }) => {
    setCardProxyCache(previousCardProxyCache => {
      if (instanceId === null) {
        throw new TypeError('instanceId must be a UUID')
      }

      const proxyIdx = previousCardProxyCache.findIndex(
        cardProxy => cardProxy.instanceId === instanceId
      )

      if (proxyIdx === -1) {
        throw new Error(`CardProxy with instanceId ${instanceId} not found`)
      }

      const cardProxy = previousCardProxyCache[proxyIdx]

      const newCardProxyCache = [
        ...previousCardProxyCache.slice(0, proxyIdx),
        { ...cardProxy, rotateX, rotateY, scale, x, y },
        ...previousCardProxyCache.slice(proxyIdx + 1),
      ]

      return newCardProxyCache
    })
  }

  const mountProxy: ICardAnimationContext['mountProxy'] = (
    cardId,
    instanceId
  ) => {
    setCardProxyCache(previousCardProxyCache => {
      const availableProxyIdx = previousCardProxyCache.findIndex(
        cardProxy =>
          cardProxy.instanceId === null && cardProxy.cardId === cardId
      )

      if (availableProxyIdx === -1) {
        throw new Error('No available proxies found')
      }

      const newCardProxyCache = [
        ...previousCardProxyCache.slice(0, availableProxyIdx),
        { ...createCardProxy(cardId), instanceId },
        ...previousCardProxyCache.slice(availableProxyIdx + 1),
      ]

      return newCardProxyCache
    })
  }

  const unmountProxy: ICardAnimationContext['unmountProxy'] = (
    cardId,
    instanceId
  ) => {
    setCardProxyCache(previousCardProxyCache => {
      const proxyIdx = previousCardProxyCache.findIndex(
        cardProxy => cardProxy.instanceId === instanceId
      )

      if (proxyIdx === -1) {
        throw new Error(`Proxy with instanceId ${instanceId} not found`)
      }

      const newPlayerCardProxyCache = [
        ...previousCardProxyCache.slice(0, proxyIdx),
        createCardProxy(cardId),
        ...previousCardProxyCache.slice(proxyIdx + 1),
      ]

      return newPlayerCardProxyCache
    })
  }

  useEffect(() => {
    setCardProxyCache(previosCardProxyCache => {
      const newCardProxyCache: CardProxyCache = Object.values(
        game.table.players
      ).reduce((acc: CardProxyCache, player) => {
        const playerCardIds = [
          ...player.deck,
          ...player.discardPile,
          ...player.hand,
          ...player.field.crops.map(({ id }) => id),
        ].sort()

        const playerCards = playerCardIds.map((cardId, idx): CardProxy => {
          return {
            ...createCardProxy(cardId),
            ...(previosCardProxyCache[idx] ? previosCardProxyCache[idx] : {}),
          }
        })

        acc = [...acc, ...playerCards]

        return acc
      }, [])

      return newCardProxyCache
    })
  }, [game])

  const contextValue = useMemo(
    (): ICardAnimationContext => ({
      cardProxyCache,
      game,
      mountProxy,
      unmountProxy,
      updateProxy,
    }),
    [cardProxyCache, game, mountProxy, unmountProxy, updateProxy]
  )

  return (
    <CardAnimationContext.Provider value={contextValue}>
      {children}
      <CardProxies cardProxyCache={cardProxyCache} />
    </CardAnimationContext.Provider>
  )
}
