import { DeepMockProxy, mockDeep } from 'vitest-mock-extended'

import { ActorContext } from '../../app/components/Game/ActorContext'

export const mockSend = () => {
  const mockSend = vi.fn()
  const mockUseActorRef: DeepMockProxy<(typeof ActorContext)['useActorRef']> =
    mockDeep<(typeof ActorContext)['useActorRef']>({
      fallbackMockImplementation: () => {
        return { send: mockSend }
      },
    })

  vi.spyOn(ActorContext, 'useActorRef').mockImplementation(mockUseActorRef)

  return mockSend
}
