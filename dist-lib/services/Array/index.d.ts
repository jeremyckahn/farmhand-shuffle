export declare class ArrayService {
    /**
     * Removes an element of an array. Returns a new copy of the reduced array.
     */
    removeAt<T>(array: T[], idx: number): T[];
    /**
     * Replaces an element in an array at the given index. Returns a new copy of the modified array.
     */
    replaceAt<T>(array: T[], idx: number, element: T): T[];
}
export declare const array: ArrayService;
