import { db } from '../shared/provider.ts'

export function prepare() {
  db.query(
    `
    CREATE TABLE IF NOT EXISTS entries (
      id INTEGER NOT NULL PRIMARY KEY,
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
      id INTEGER NOT NULL PRIMARY KEY,
      interval TEXT NOT NULL,
      amount INTEGER NOT NULL,
      category TEXT NOT NULL
    )
    `,
    []
  )

  db.close()
}
