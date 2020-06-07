import { bold as b } from '../../deps.ts'

export const undo = `
  ${b('Usage')}:
    keiko undo          - Remove the last added ${b('ENTRY')} (one-time expense)
    keiko undo regulars - Remove the last added ${b('REGULAR')} (recurring expense)

  ${b('Examples')}:
    keiko undo
    keiko u

    keiko undo regulars
    keiko u r
`
