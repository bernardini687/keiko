import { db } from './helpers/provider.ts'
import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'

let table: string
let column: string

if (Deno.args[0]?.[0] === 'r') {
  table = 'regulars'
  column = 'interval'
} else {
  table = 'entries'
  column = 'date'
}

console.log(table, column)

const rows = db.query(
  `
  SELECT ${column}, amount, category FROM ${table}
  `,
  []
)

const rawRecords: any[] = []

if (table === 'regulars') {
  // @ts-ignore
  for (const [interval, amount, category] of rows) {
    rawRecords.push({ interval, amount, category })
  }
} else {
  // @ts-ignore
  for (const [date, amount, category] of rows) {
    rawRecords.push({ date, amount, category })
  }
}

// NOTE: helpers/formatters.ts -> date and amount for display

console.log(
  miniTable(rawRecords, Object.keys(rawRecords[0]), { upcaseHeader: true })
)

db.close()
