import { balance } from './queries/mod.ts'
import { db } from './helpers/provider.ts'
import { formatAmt, formatPct } from './helpers/formatters.ts'
import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'

function percent(tot: number, partial: number) {
  return (tot / 100) * partial
}

function percentage(partial: number, tot: number) {
  if (tot === 0) {
    return tot
  }
  return (100 * partial) / tot
}

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate()
}

const saveFract = Number(Deno.env.get('KEIKO_SAVE_FRACT')) || 0
console.log('fract', saveFract)

const now = new Date()
const days = daysInMonth(now.getMonth() + 1, now.getFullYear())
console.log('days', days)

const regularsBal = balance('regulars')
const saveGoal = percent(regularsBal, saveFract)
const perMonth = regularsBal - saveGoal

const spent = percentage(Math.abs(balance('entries')), perMonth)

const perDay = perMonth / days
const today = now.getDate()
console.log('today', today)

const endOfMonth = percentage(today, days)

const budget = {
  'per month': formatAmt(perMonth),
  'per day': formatAmt(perDay),
  'end of month': formatPct(endOfMonth),
  spent: formatPct(spent),
  'save goal': formatAmt(saveGoal),
}

console.log(miniTable([budget], Object.keys(budget), { upcaseHeader: true }))

db.close()
