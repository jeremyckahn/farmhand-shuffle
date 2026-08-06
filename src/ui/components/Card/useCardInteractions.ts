import { useContext } from 'react'

import { STANDARD_FIELD_SIZE } from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { CardType, MatchEvent, MatchState } from '../../../game/types'
import {
  isCropCardInstance,
  isPlantableCardInstance,
} from '../../../game/types/guards'
import { assertIsNonNullable } from '../../../game/types/assertions'
import { useMatchRules } from '../../hooks/useMatchRules'
import { ActorContext } from '../Match/ActorContext'
import { ShellContext } from '../Match/ShellContext'
import { deselectedHandIdx } from '../constants'

import { CardInteractions, CardProps } from './types'

export const useCardInteractions = (props: CardProps): CardInteractions => {
  const {
    cardInstance,
    cardIdxInHand,
    cropIdxInFieldToWater,
    cropIdxInFieldToHarvest,
    cardIdxInField,
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
  const { setIsHandInViewport, setSelectedHandCardIdx } =
    useContext(ShellContext)

  const { eventCardsThatCanBePlayed, selectedWaterCardInHandIdx } = match
  const canEventCardsBePlayed = eventCardsThatCanBePlayed > 0

  const handlePlayCard = async () => {
    const isPlantingAction = isPlantableCardInstance(cardInstance)

    // NOTE: Deselecting the card early for non-planting actions initiates the
    // transition animation back to the hand before the card is unmounted. This
    // prevents adjacent cards from visually jumping into the active slot.
    if (!isPlantingAction) {
      setSelectedHandCardIdx(deselectedHandIdx)
    }

    if (onBeforePlay) {
      await onBeforePlay()
    }

    assertIsNonNullable(
      cardIdxInHand,
      'cardIdxInHand is not a valid hand index'
    )

    switch (cardInstance.type) {
      case CardType.CROP: {
        actorRef.send({
          type: MatchEvent.PLAY_CROP,
          cardIdxInHand,
          playerId,
        })
        setIsHandInViewport(false)

        break
      }

      case CardType.WATER: {
        actorRef.send({
          type: MatchEvent.PLAY_WATER,
          cardIdxInHand,
          playerId,
        })
        setIsHandInViewport(false)

        break
      }

      case CardType.EVENT: {
        actorRef.send({
          type: MatchEvent.PLAY_EVENT,
          cardIdxInHand,
          playerId,
        })

        break
      }

      case CardType.TOOL: {
        actorRef.send({
          type: MatchEvent.PLAY_TOOL,
          cardIdxInHand,
          playerId,
        })

        // NOTE: Only plantable tools require positioning in the Field (thus
        // necessitating sliding the Hand out of the viewport to make space for
        // selection). Non-plantable tools (like Shovel) resolve immediately.
        if (isPlantingAction) {
          setIsHandInViewport(false)
        }

        break
      }

      default:
    }
  }

  const handleWaterCrop = () => {
    assertIsNonNullable(
      cropIdxInFieldToWater,
      'cropIdxInFieldToWater is not a valid field index'
    )

    actorRef.send({
      type: MatchEvent.SELECT_CROP_TO_WATER,
      playerId,
      cropIdxInFieldToWater,
      waterCardInHandIdx: selectedWaterCardInHandIdx,
    })
  }

  const handleHarvestCrop = () => {
    assertIsNonNullable(
      cropIdxInFieldToHarvest,
      'cropIdxInFieldToHarvest is not a valid field index'
    )

    actorRef.send({
      type: MatchEvent.HARVEST_CROP,
      playerId,
      cropIdxInFieldToHarvest,
    })
  }

  const handleDiscardCard = () => {
    assertIsNonNullable(
      cardIdxInField,
      'cardIdxInField is not a valid field index'
    )

    actorRef.send({
      type: MatchEvent.DISCARD_CARD_FROM_FIELD,
      playerId,
      cardIdxInField,
    })
  }

  const isSessionOwnersCard = playerId === match.sessionOwnerPlayerId

  let showPlayCardButton = false
  let playButtonDisabled = false
  let showWaterCropButton = false
  let showHarvestCropButton = false
  let showDiscardButton = false
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
        const player = lookup.getPlayer(match, playerId)

        if (
          player.field.cards.filter(crop => crop !== undefined).length >=
          STANDARD_FIELD_SIZE
        ) {
          playButtonDisabled = true
        }
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
        !isInField &&
        matchState === MatchState.WAITING_FOR_PLAYER_TURN_ACTION
      ) {
        showPlayCardButton = true
      }

      if (isSessionOwnersCard && isInField && isFocused) {
        showDiscardButton = true
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
    playButtonDisabled,
    showWaterCropButton,
    showHarvestCropButton,
    showWaterableState,
    showHarvestableState,
    showDiscardButton,
    tooltipTitle,
    onPlayCard: handlePlayCard,
    onWaterCrop: handleWaterCrop,
    onHarvestCrop: handleHarvestCrop,
    onDiscardCard: handleDiscardCard,
    isSessionOwnersCard,
  }
}
