import { open } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

const mode = Deno.env.get('DENO_ENV') ?? 'keiko'

export const db = await open(`./${mode}.db`)
