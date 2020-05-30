import { db } from './provider.ts'
import { table } from 'https://deno.land/x/minitable@v1.0/mod.ts'

const rows = db.query(
  `
  SELECT date, amount, category FROM entries
  `,
  []
)

interface Entry {
  date: string
  amount: string
  category: string
}

const rawEntries: any[] = []

// @ts-ignore
for (const [date, amount, category] of rows) {
  rawEntries.push({ date, amount, category })
}

// format date and amount for display

console.log(
  table(rawEntries, ['date', 'amount', 'category'], { upcaseHeader: true })
)

db.close()
