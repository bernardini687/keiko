import miniDate from 'https://deno.land/x/minidate@v1.0/mod.ts'
import { expand, toNegCents, toPosCents } from './transformers.ts'
import { BaseRow, EntryRow, RegularRow } from '../../interfaces/mod.ts'

/** Build a one-time entry (or, simply, `entry`). */
export function buildEntry([cat, amt, date]: string[]): ['entries', EntryRow] {
  const entry: EntryRow = Object.assign(buildBase(cat, amt), {
    date: miniDate(date),
  })

  return ['entries', entry]
}

/** Build a recurring entry (or, simply, `regular`). */
export function buildRegular([cat, amt, int]: string[]): ['regulars', RegularRow] {
  const regulars: RegularRow = Object.assign(buildBase(cat, amt), {
    interval: expand(int),
  })

  return ['regulars', regulars]
}

function buildBase(cat: string, amt: string): BaseRow {
  const category = expand(cat)
  const amount = category === 'income' ? toPosCents(amt) : toNegCents(amt)

  return {
    category,
    amount,
  }
}
