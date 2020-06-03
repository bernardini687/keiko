import { buildEntry, buildRegular } from './helpers/builders.ts'
import { insert } from './helpers/inserter.ts'
import { isEntry, isRegular } from './helpers/validators.ts'

export async function add(args: string[]) {
  console.log('ARGS::', args)

  if (isEntry(args)) {
    await insert(...buildEntry(args))
  }

  if (isRegular(args)) {
    await insert(...buildRegular(args))
  }
}
