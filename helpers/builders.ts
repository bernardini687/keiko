import { expand, toNegativeCents } from './transformers.ts'
import shape from 'https://deno.land/x/minidate@v1.0/mod.ts'

interface DataEntry {
  category: string
  amount: number
  date: Date
}

export function buildEntry(values: string[]): ['entries', DataEntry] {
  const [category, amount, date] = values

  const entry: DataEntry = {
    category: expand(category),
    amount: toNegativeCents(amount),
    date: shape(date),
  }

  return ['entries', entry]
}
