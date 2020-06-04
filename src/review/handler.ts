import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'
import { formatAmt, formatDate } from '../shared/formatters.ts'
import { db } from '../shared/provider.ts'

export function review(table: 'regulars' | 'entries') {
  if (table === 'regulars') {
    showRegulars()
  } else {
    showEntries()
  }

  db.close()
}

function showRegulars(records: any[] = []) {
  const rows = db.query(
    `SELECT interval, amount, category FROM regulars ORDER BY interval DESC, amount ASC`,
    []
  )

  //@ts-ignore
  for (const [interval, amount, category] of rows) {
    records.push({ interval, amount: formatAmt(amount), category })
  }

  console.log(
    miniTable(records, ['interval', 'amount', 'category'], { upcaseHeader: true })
  )
}

function showEntries(records: any[] = []) {
  const rows = db.query(
    `SELECT date, amount, category FROM entries ORDER BY date ASC`,
    []
  )

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
