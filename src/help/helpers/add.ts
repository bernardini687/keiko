const now = new Date()
const today = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`

export const add = `
  Usage:
    keiko <CATEGORY> <AMOUNT> [DATE]     - add a one-time expense (ENTRY)
    keiko <CATEGORY> <AMOUNT> <INTERVAL> - add a recurring expense (REGULAR)

  CATEGORY   * Include the expense in a category or mark it as an income.
    general  - transport, food, medical, ...
    leisure  - entertainment, shopping, pubs, ...
    culture  - books, cinema, arts, ...
    extra    - repairs, gifts, emergencies, ...
    income   - earnings

  AMOUNT     * The amount of the expense/income, comma or dot-separated.

  DATE       * (ENTRIES only) When omitted, defaults to the current date.
    1        - means the first of the current month and year
    1-1      - means the first of January, current year
    1-1-2020 - an arbitrary date

  INTERVAL   * (REGULARS only) Marks the interval of a REGULAR's occurrences.
    monthly
    yearly

  Examples:
    keiko general 19,90 ${today}
    keiko g 19,9

    keiko leisure 30 yearly
    keiko l 30 y

    keiko income 1000 monthly
    keiko i 1000 m
`
