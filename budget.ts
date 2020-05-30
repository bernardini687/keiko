import { db } from './helpers/provider.ts'
import { table } from 'https://deno.land/x/minitable@v1.0/mod.ts'

const rows = db.query(
  `
  SELECT interval, amount, category FROM regulars
  `,
  []
)

interface DisplayRegular {
  interval: string
  amount: string
  category: string
}

const rawRegulars: any[] = []

// @ts-ignore
for (const [interval, amount, category] of rows) {
  rawRegulars.push({ interval, amount, category })
}

// NOTE: helpers/formatters.ts -> amount for display

console.log(
  table(rawRegulars, ['interval', 'amount', 'category'], { upcaseHeader: true })
)

db.close()
