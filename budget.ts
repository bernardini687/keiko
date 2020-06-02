import { balance } from './queries/mod.ts'
import { db } from './helpers/provider.ts'
import { formatAmt, formatPct } from './helpers/formatters.ts'
import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'

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

export function budget() {
  const budget = decorateBudget()
  console.log(miniTable([budget], Object.keys(budget), { upcaseHeader: true }))
  db.close()
}

function decorateBudget() {
  const { saveGoal, perMonth, perDay, endOfMonth, spent } = rawBudget(
    balance('regulars')
  )

  return {
    'save goal': formatAmt(saveGoal),
    'per month': formatAmt(perMonth),
    'per day': formatAmt(perDay),
    'end of month': formatPct(endOfMonth),
    spent: formatPct(spent),
  }
}

function rawBudget(regularsBal: number) {
  const [today, days] = todayOfDays()
  console.log('TODAY:', today, 'DAYS:', days)

  const saveGoal = (regularsBal / 100) * saveFraction
  const perMonth = regularsBal - saveGoal
  const perDay = perMonth / days
  const endOfMonth = percentage(today, days)
  const spent = percentage(Math.abs(balance('entries')), perMonth)

  return { saveGoal, perMonth, perDay, endOfMonth, spent }
}

const saveFraction = Number(Deno.env.get('KEIKO_SAVE_GOAL')) || 0
console.log('SAVE FRACTION:', saveFraction)

budget()
