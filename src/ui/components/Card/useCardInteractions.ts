import { useContext } from 'react'

import {
  CardType,
  MatchEvent,
  MatchState,
  isCropCardInstance,
} from '../../../game/types'
import { useMatchRules } from '../../hooks/useMatchRules'
import { ActorContext } from '../Match/ActorContext'
import { ShellContext } from '../Match/ShellContext'

import { CardProps, CardInteractions } from './types'

export const useCardInteractions = (props: CardProps): CardInteractions => {
  const {
    cardInstance,
    cardIdx,
    playerId,
    onBeforePlay,
    canBeWatered = false,
    canBeHarvested = false,
    isFocused = false,
    isInField = false,
  } = props

  const { useActorRef } = ActorContext
  const actorRef = useActorRef()
  const { match, matchState } = useMatchRules()
  const { setIsHandInViewport } = useContext(ShellContext)

  const { eventCardsThatCanBePlayed, selectedWaterCardInHandIdx } = match
  const canEventCardsBePlayed = eventCardsThatCanBePlayed > 0

  const handlePlayCard = async () => {
    if (onBeforePlay) {
      await onBeforePlay()
    }

    switch (cardInstance.type) {
      case CardType.CROP: {
        actorRef.send({ type: MatchEvent.PLAY_CROP, cardIdx, playerId })

        break
      }

      case CardType.WATER: {
        actorRef.send({ type: MatchEvent.PLAY_WATER, cardIdx, playerId })
        setIsHandInViewport(false)

        break
      }

      case CardType.EVENT: {
        actorRef.send({ type: MatchEvent.PLAY_EVENT, cardIdx, playerId })

        break
      }

      case CardType.TOOL: {
        actorRef.send({ type: MatchEvent.PLAY_TOOL, cardIdx, playerId })

        break
      }

      default:
    }
  }

  const handleWaterCrop = () => {
    actorRef.send({
      type: MatchEvent.SELECT_CROP_TO_WATER,
      playerId,
      cropIdxInFieldToWater: cardIdx,
      waterCardInHandIdx: selectedWaterCardInHandIdx,
    })
  }

  const handleHarvestCrop = () => {
    actorRef.send({
      type: MatchEvent.HARVEST_CROP,
      playerId,
      cropIdxInFieldToHarvest: cardIdx,
    })
  }

  const isSessionOwnersCard = playerId === match.sessionOwnerPlayerId

  let showPlayCardButton = false
  let showWaterCropButton = false
  let showHarvestCropButton = false
  let isBuffedCrop = false

  switch (cardInstance.type) {
    case CardType.CROP: {
      isBuffedCrop = cardInstance.id === match.buffedCrop?.crop.id

      if (
        isSessionOwnersCard &&
        isFocused &&
        !isInField &&
        [
          MatchState.WAITING_FOR_PLAYER_TURN_ACTION,
          MatchState.WAITING_FOR_PLAYER_SETUP_ACTION,
        ].includes(matchState)
      ) {
        showPlayCardButton = true
      }

      if (
        isSessionOwnersCard &&
        isFocused &&
        isInField &&
        canBeWatered &&
        [MatchState.PLAYER_WATERING_CROP].includes(matchState)
      ) {
        showWaterCropButton = true
      }

      if (
        isSessionOwnersCard &&
        isFocused &&
        isInField &&
        canBeHarvested &&
        [MatchState.WAITING_FOR_PLAYER_TURN_ACTION].includes(matchState)
      ) {
        showHarvestCropButton = true
      }

      break
    }

    case CardType.EVENT: {
      if (
        isSessionOwnersCard &&
        isFocused &&
        canEventCardsBePlayed &&
        matchState === MatchState.WAITING_FOR_PLAYER_TURN_ACTION
      ) {
        showPlayCardButton = true
      }

      break
    }

    case CardType.TOOL: {
      if (
        isSessionOwnersCard &&
        isFocused &&
        matchState === MatchState.WAITING_FOR_PLAYER_TURN_ACTION
      ) {
        showPlayCardButton = true
      }

      break
    }

    case CardType.WATER: {
      if (
        isSessionOwnersCard &&
        isFocused &&
        matchState === MatchState.WAITING_FOR_PLAYER_TURN_ACTION
      ) {
        showPlayCardButton = true
      }

      break
    }

    default:
  }

  const showWaterableState =
    isInField &&
    canBeWatered &&
    matchState === MatchState.PLAYER_WATERING_CROP &&
    match.currentPlayerId === playerId &&
    isCropCardInstance(cardInstance)

  const showHarvestableState =
    isInField &&
    canBeHarvested &&
    isCropCardInstance(cardInstance) &&
    // NOTE: This is necessary to prevent interfering with waterable crop
    // state presentation
    matchState !== MatchState.PLAYER_WATERING_CROP

  let tooltipTitle = ''

  if (isSessionOwnersCard) {
    if (showWaterableState) {
      tooltipTitle = 'Needs water'
    } else if (showHarvestableState) {
      tooltipTitle = 'Ready to be harvested'
    }
  }

  return {
    isBuffedCrop,
    showPlayCardButton,
    showWaterCropButton,
    showHarvestCropButton,
    showWaterableState,
    showHarvestableState,
    tooltipTitle,
    onPlayCard: handlePlayCard,
    onWaterCrop: handleWaterCrop,
    onHarvestCrop: handleHarvestCrop,
    isSessionOwnersCard,
  }
}
