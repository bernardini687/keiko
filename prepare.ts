import { db } from './provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

db.query(
  `
  CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    amount INTEGER NOT NULL,
    category TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS regulars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    interval TEXT NOT NULL,
    amount INTEGER NOT NULL,
    category TEXT NOT NULL
  );
  `,
  []
)

await save(db)
db.close()
