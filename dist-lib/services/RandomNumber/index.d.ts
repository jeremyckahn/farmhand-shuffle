export declare class RandomNumberService {
    private readonly rng;
    constructor(seed?: string | null);
    /**
     * Generates a random number between 0 (inclusive) and 1 (exclusive).
     * @returns A random number.
     */
    generate(): number;
    /**
     * Shuffles a list using the Fisher-Yates algorithm.
     * @param list - The list to shuffle.
     * @returns A shuffled copy of the list.
     */
    shuffle<T>(list: T[]): T[];
    /**
     * Returns a random index from a list.
     * @param list - The list to choose an index from.
     * @returns A random index from the list, or undefined if the list is empty.
     */
    randomIndex<T>(list: T[]): number | undefined;
    /**
     * Chooses a random element from a list.
     * @param list - The list to choose an element from.
     * @returns A random element from the list, or undefined if the list is empty.
     */
    chooseElement<T>(list: T[]): T | undefined;
    /**
     * Chooses a random integer between two given integers (inclusive).
     * Throws an error if inputs are not integers.
     * @param a - The first integer.
     * @param b - The second integer.
     * @returns A random integer between a and b (inclusive).
     * @throws {Error} If `a` or `b` are not integers.
     */
    chooseIntegerBetween(a: number, b: number): number;
}
export declare const randomNumber: RandomNumberService;
