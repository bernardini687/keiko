import { db } from './provider.ts'
import { table } from 'https://deno.land/x/minitable@v1.0/mod.ts'

const rows = db.query(
  `
  SELECT interval, amount, category FROM regulars
  `,
  []
)

interface Regular {
  interval: string
  amount: string
  category: string
}

const rawEntries: any[] = []

// @ts-ignore
for (const [interval, amount, category] of rows) {
  rawEntries.push({ interval, amount, category })
}

// format date and amount for display

console.log(
  table(rawEntries, ['interval', 'amount', 'category'], { upcaseHeader: true })
)

db.close()
