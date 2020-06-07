import { bold as b } from '../../deps.ts'

const now = new Date()
const today = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`

export const add = `
  ${b('Usage')}:
    keiko <CATEGORY> <AMOUNT> [DATE]     - Add an ${b('ENTRY')} (one-time expense)
    keiko <CATEGORY> <AMOUNT> <INTERVAL> - Add a ${b('REGULAR')} (recurring expense)

  ${b('CATEGORY     Include the expense in a category or mark it as an income')}.
    general  - transport, food, medical...
    leisure  - entertainment, shopping, pubs...
    culture  - books, cinema, arts...
    extra    - repairs, gifts, emergencies...
    income   - earnings

  ${b('AMOUNT       The amount of the expense/income, comma or dot-separated')}.

  ${b("DATE         Sets an ENTRY's date, defaulting to today's one")}.
    1        - the first of the current month and year
    1-1      - the first of January, current year
    1-1-2020 - an arbitrary date

  ${b("INTERVAL     Sets the interval of a REGULAR's occurrence")}.
    monthly
    yearly

  ${b('Examples')}:
    keiko general 19,90 ${today}
    keiko g 19,9

    keiko leisure 30 yearly
    keiko l 30 y

    keiko income 1000 monthly
    keiko i 1000 m
`
