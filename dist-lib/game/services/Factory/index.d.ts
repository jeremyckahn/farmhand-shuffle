import { CropInstance, IField, IMatch, IPlayedCrop, IPlayedTool, IPlayer, IPlayerSeed, ITable, ToolInstance } from '../../types';
export declare class FactoryService {
    buildField(overrides?: Partial<IField>): IField;
    buildPlayer(overrides?: Partial<IPlayer>): IPlayer;
    buildTable(overrides?: Partial<ITable>): ITable;
    /**
     * Constructs a minimally valid IMatch object.
     */
    buildMatch(overrides?: Partial<IMatch>, sessionOwnerPlayerId?: string): IMatch;
    /**
     * Constructs an IMatch object that is ready to be used by the rules
     * processing engine.
     */
    buildMatchForSession(playerSeeds: IPlayerSeed[], userPlayerId?: string | undefined): IMatch;
    buildPlayedCrop(cropInstance: CropInstance): IPlayedCrop;
    buildPlayedTool(toolInstance: ToolInstance): IPlayedTool;
}
export declare const factory: FactoryService;
