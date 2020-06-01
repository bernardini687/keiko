import { log } from './helpers/logger.ts'
import { isEntry, isRegular } from './helpers/validators.ts'
import { buildEntry, buildRegular } from './helpers/builders.ts'
import { insert } from './helpers/inserter.ts'

const { args, exit } = Deno

log(args)

if (isEntry(args)) {
  await insert(...buildEntry(args))
  exit()
}

if (isRegular(args)) {
  await insert(...buildRegular(args))
} else {
  console.log('TODO: show help!')
  exit(1)
}
