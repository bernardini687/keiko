import { isEntry, isRegular } from './helpers/validators.ts'
import { buildEntry, buildRegular } from './helpers/builders.ts'
import { insert } from './helpers/inserter.ts'

export async function add(args: string[]) {
  if (isEntry(args)) {
    await insert(...buildEntry(args))
    exit()
  }

  if (isRegular(args)) {
    await insert(...buildRegular(args))
  } else {
    console.log('TODO:', 'help handling')
    exit(1)
  }
}

const { args, exit } = Deno
console.log('ARGS:', args)

await add(args)
