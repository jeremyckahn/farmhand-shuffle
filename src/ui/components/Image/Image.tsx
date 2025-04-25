import { styled } from '@mui/material/styles'

import { ICard } from '../../../game/types'
import { isCardImageKey, cards, ui } from '../../img'

export const Image = styled('img')({})

/**
 * Retrieves the image source for a given card.
 * @param card - The card object.
 * @returns The image source URL for the card.
 */
export const getCardImageSrc = (card: ICard) => {
  const isValid = isCardImageKey(card.id)

  if (!isValid) {
    console.error(`Card ID ${card.id} does not have an image configured`)
  }

  return isValid ? cards[card.id] : ui.pixel
}
