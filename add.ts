import { isEntry, isRegular } from './helpers/validators.ts'
import { buildEntry, buildRegular } from './helpers/builders.ts'
import { insert } from './helpers/inserter.ts'

const { args, exit } = Deno

console.log(args)

if (isEntry(args)) {
  await insert(...buildEntry(args))
  exit()
}

if (isRegular(args)) {
  await insert(...buildRegular(args))
} else {
  console.log('TODO: help handling')
  exit(1)
}
