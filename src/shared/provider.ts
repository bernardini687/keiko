import { DB } from '../deps.ts'

const mode = Deno.env.get('DENO_ENV') ?? 'keiko'

/** In-memory reference to the sqlite database file. */
export const db = new DB(`${Deno.cwd()}/db/${mode}.db`)
