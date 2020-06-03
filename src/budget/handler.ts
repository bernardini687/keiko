import { table as miniTable } from 'https://deno.land/x/minitable@v1.0/mod.ts'
import { decorateBudget } from './helpers/decorator.ts'
import { db } from '../shared/provider.ts'

export function budget(saveFraction: number) {
  const budget = decorateBudget(saveFraction)
  console.log(miniTable([budget], Object.keys(budget), { upcaseHeader: true }))
  db.close()
}
