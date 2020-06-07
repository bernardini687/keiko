import { bold as b } from '../../deps.ts'

export const main = `
  ${b('Keiko')} v0.0.1
  A kakebo in your command-line.

  https://github.com/bernardini687/keiko

  ${b('Commands')}:
    add        - Add an income or an expense
    budget     - Show a monthly budget report
    help       - Show help for the available commands
    prepare    - Create the database
    review     - Show the records
    undo       - Remove the last added record

  ${b('Environment variables')}:
    KEIKO_GOAL - 🚧
    KEIKO_DATA - 🚧
`
