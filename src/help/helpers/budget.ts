import { bold as b } from '../../deps.ts'

export const budget = `
  Show a monthly budget report. 🚧
  Set a saving goal with ${b('KEIKO_GOAL')}'s environment variable.

  ${b('Examples')}:
    keiko budget
    keiko b

    KEIKO_GOAL=50 keiko budget
`
