import { log } from './logger.ts'
import { isEntry } from './validators.ts'
import { buildEntry } from './builders.ts'
import { insert } from './inserter.ts'

const { args } = Deno

log(args)

if (isEntry(args)) {
  await insert(...buildEntry(args))
} else {
  console.log('add [CATEGORY] [AMOUNT] [DATE]')
}

Deno.exit()
