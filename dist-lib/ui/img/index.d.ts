import { ICard } from '../../game/types';
export declare const cards: {
    carrot: string;
    corn: string;
    garlic: string;
    pea: string;
    potato: string;
    pumpkin: string;
    rain: string;
    shovel: string;
    sprinkler: string;
    tomato: string;
    water: string;
};
export declare const ui: {
    dirt: string;
    pixel: string;
    brownDotBackground: string;
};
export declare const isCardImageKey: (key: ICard["id"]) => key is keyof typeof cards;
