import { bold as b } from '../../deps.ts'

export const prepare = `
  Create the database in the default location. 🚧
  Change the location with ${b('KEIKO_DATA')}'s environment variable.

  ${b('Examples')}:
    keiko prepare
    keiko p

    KEIKO_DATA=./tmp keiko prepare 🚧
`
