import { balance } from './balancer.ts'
import { percentage, todayOfDays } from './calculators.ts'
import { formatAmt, formatPct } from '../../shared/formatters.ts'
import { db } from '../../shared/provider.ts'

export function decorateBudget(saveFraction: number) {
  const { saveGoal, perMonth, perDay, endOfMonth, spent } = rawBudget(
    balance('regulars', db),
    saveFraction
  )

  db.close()

  return {
    'save goal': formatAmt(saveGoal),
    'per month': formatAmt(perMonth),
    'per day': formatAmt(perDay),
    'end of month': formatPct(endOfMonth),
    spent: formatPct(spent),
  }
}

function rawBudget(regularsBal: number, saveFraction: number) {
  const [today, days] = todayOfDays()

  const saveGoal = (regularsBal / 100) * saveFraction
  const perMonth = regularsBal - saveGoal
  const perDay = perMonth / days
  const endOfMonth = percentage(today, days)
  const spent = percentage(Math.abs(balance('entries', db)), perMonth)

  return { saveGoal, perMonth, perDay, endOfMonth, spent }
}
