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

function todayOfDays(): [number, number] {
  const now = new Date()
  return [
    now.getDate(),
    new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
  ]
}

const saveFract = Number(Deno.env.get('KEIKO_SAVE_GOAL')) || 0
console.log('fract', saveFract)

const [today, days] = todayOfDays()
console.log('today', today)
console.log('days', days)

const regularsBal = balance('regulars')
const saveGoal = percent(regularsBal, saveFract)
const perMonth = regularsBal - saveGoal

const spent = percentage(Math.abs(balance('entries')), perMonth)

const perDay = perMonth / days

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
