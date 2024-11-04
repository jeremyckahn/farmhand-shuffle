import { InteractionHandlers } from '../../game/services/Rules/InteractionHandlers'

export const stubInteractionHandlers = (): InteractionHandlers => {
  return {
    selectCropFromField: () => Promise.resolve(0),
  }
}
