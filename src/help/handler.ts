import { man } from './helpers/man.ts'

type Command = 'add' | 'budget' | 'help' | 'main' | 'prepare' | 'review' | 'undo'

export function help(command: Command) {
  console.log(man[command])
}
