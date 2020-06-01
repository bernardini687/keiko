import { db } from '../helpers/provider.ts'

/**
 * Compute the balance of the provided database table.
 * @param table The name of the database table to query.
 */
//@ts-ignore
export function balance(table: 'entries' | 'regulars'): number {
  const rows = db.query(
    `
    SELECT SUM(amount) FROM ${table}
    `,
    []
  )

  let bal: number

  // TODO: support `interval`

  //@ts-ignore
  for (const [sum] of rows) {
    if (typeof sum === 'number') {
      bal = sum
      return bal
    } else {
      throw 'TODO: error handling'
    }
  }
}
