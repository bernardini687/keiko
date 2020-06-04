import { startOfMonth } from './calculators.ts'

/**
 * Compute the balance of the provided database table.
 * @param table The name of the database table to query.
 */
export function balance(table: 'entries' | 'regulars', db: any): number {
  if (table === 'regulars') {
    return sumRegulars(db)
  }

  const [row] = db.query('SELECT SUM(amount) FROM entries WHERE date > ?', [
    startOfMonth(),
  ])

  return row?.[0] || 0
}

function sumRegulars(db: any): number {
  const rows = db.query('SELECT amount, interval FROM regulars', [])

  let bal = 0

  //@ts-ignore
  for (const [amt, int] of rows) {
    int === 'yearly' ? (bal += Math.floor(amt / 12)) : (bal += amt)
  }

  return bal
}
