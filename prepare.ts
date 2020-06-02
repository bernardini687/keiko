import { db } from './helpers/provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

export async function prepare() {
  db.query(
    `
    CREATE TABLE IF NOT EXISTS entries (
      date TEXT NOT NULL,
      amount INTEGER NOT NULL,
      category TEXT NOT NULL
    )
    `,
    []
  )

  db.query(
    `
    CREATE TABLE IF NOT EXISTS regulars (
      interval TEXT NOT NULL,
      amount INTEGER NOT NULL,
      category TEXT NOT NULL
    )
    `,
    []
  )

  await save(db)
  db.close()
}

await prepare()
