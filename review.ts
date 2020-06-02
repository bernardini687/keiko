import { db } from './helpers/provider.ts'
import { formatAmt, formatDate } from './helpers/formatters.ts'
import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'

const { args } = Deno
const regularsFlagOn = args[0]?.startsWith('r')

let table: 'regulars' | 'entries'
let column: 'interval' | 'date'

if (regularsFlagOn) {
  table = 'regulars'
  column = 'interval'
} else {
  table = 'entries'
  column = 'date'
}

console.log(table.toUpperCase())

const rows = db.query(`SELECT ${column}, amount, category FROM ${table}`, [])

const records: any[] = []

if (regularsFlagOn) {
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
