import { InteractionHandlers } from '../../game/services/Rules/InteractionHandlers'

export const stubInteractionHandlers = (): InteractionHandlers => {
  return {
    selectCropFromField: async () => 0,
  }
}
