import { createActorContext } from '@xstate/react'

import { rules } from '../../../game/services/Rules'

export const ActorContext = createActorContext(rules.createGameStateMachine())
