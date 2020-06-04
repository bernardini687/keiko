import { decorateBudget } from './helpers/decorator.ts'
import { db } from '../shared/provider.ts'
import { miniTable } from '../deps.ts'

export function budget(saveFraction: number) {
  const budget = decorateBudget(saveFraction)
  console.log(miniTable([budget], Object.keys(budget), { upcaseHeader: true }))
  db.close()
}
