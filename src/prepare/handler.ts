import { db } from '../shared/provider.ts'
import { save } from '../deps.ts'

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
