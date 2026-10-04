import { ICard } from '../../../game/types';
export declare const Image: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, import('react').DetailedHTMLProps<import('react').ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
/**
 * Retrieves the image source for a given card.
 * @param card - The card object.
 * @returns The image source URL for the card.
 */
export declare const getCardImageSrc: (card: ICard) => string;
