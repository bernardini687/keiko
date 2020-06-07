import { bold as b } from '../../deps.ts'

export const help = `
  ${b('Usage')}:
    keiko help [${b('COMMAND')}] - Show help for the available commands

  ${b('COMMAND')}:
    add
    budget
    help
    prepare
    review
    undo

  ${b('Examples')}:
    keiko help
    keiko h

    keiko help add
    keiko h a
`
