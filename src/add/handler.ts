import { buildEntry, buildRegular } from './helpers/builders.ts'
import { insert } from './helpers/inserter.ts'
import { isEntry, isRegular } from './helpers/validators.ts'

export function add(args: string[]) {
  if (isEntry(args)) {
    insert(...buildEntry(args))
  }

  if (isRegular(args)) {
    insert(...buildRegular(args))
  } else {
    Deno.exit(1)
  }
}
