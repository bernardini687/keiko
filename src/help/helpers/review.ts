import { bold as b } from '../../deps.ts'

export const review = `
  ${b('Usage')}:
    keiko review          - Show the ${b('ENTRIES')} (one-time expenses)
    keiko review regulars - Show the ${b('REGULARS')} (recurring expenses)

  ${b('Examples')}:
    keiko review
    keiko r

    keiko review regulars
    keiko r r
`
