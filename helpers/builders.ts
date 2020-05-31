import { expand, toNegativeCents } from './transformers.ts'
import shape from 'https://deno.land/x/minidate@v1.0/mod.ts'

interface DataEntry {
  category: string
  amount: number
  date: Date
}

interface DataRegular {
  category: string
  amount: number
  interval: string
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

export function buildRegular(values: string[]): ['regulars', DataRegular] {
  const category = expand(values[0])
  const amount =
    category == 'income' ? -toNegativeCents(values[1]) : toNegativeCents(values[1])

  const regulars: DataRegular = {
    category,
    amount,
    interval: expand(values[2]),
  }

  return ['regulars', regulars]
}
