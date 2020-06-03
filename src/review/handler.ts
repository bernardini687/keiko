import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'
import { formatAmt, formatDate } from '../shared/formatters.ts'
import { db } from '../shared/provider.ts'

export function review(table: 'regulars' | 'entries') {
  const isRegulars = table === 'regulars'

  const column = isRegulars ? 'interval' : 'date'

  const rows = db.query(`SELECT ${column}, amount, category FROM ${table}`, [])

  const records: any[] = []

  if (isRegulars) {
    // @ts-ignore
    for (const [interval, amount, category] of rows) {
      records.push({ interval, amount: formatAmt(amount), category })
    }
    console.log(
      miniTable(records, ['interval', 'amount', 'category'], { upcaseHeader: true })
    )
  } else {
    // @ts-ignore
    for (const [date, amount, category] of rows) {
      records.push({
        date: formatDate(new Date(date)),
        amount: formatAmt(amount),
        category,
      })
    }
    console.log(
      miniTable(records, ['date', 'amount', 'category'], { upcaseHeader: true })
    )
  }

  db.close()
}
