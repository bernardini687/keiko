import { log } from './logger.ts'
import { db } from './provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

interface DataEntry {
  category: string
  amount: number
  date: Date
}

interface DataRegular {
  category: string
  amount: number
  interval: string
}

export async function insert(table: string, record: DataEntry) {
  // try / catch
  db.query(
    `
    INSERT INTO ${table} (
      ${Object.keys(record)}
    ) VALUES (
      ?, ?, ?
    )
    `,
    Object.values(record)
  )

  log(record)

  await save(db)
  db.close()
}
