import { open } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

const mode = Deno.env.get('DENO_ENV') ?? 'keiko'

console.log('CWD::', Deno.cwd())

/** In-memory reference to the sqlite database file. */
export const db = await open(`${Deno.cwd()}/db/${mode}.db`)
