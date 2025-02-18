import { createMachine } from './createMachine'

export type RulesMachineConfig = Omit<
  Parameters<typeof createMachine>[0],
  'context'
>
