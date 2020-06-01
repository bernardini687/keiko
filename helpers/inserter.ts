import { db } from './provider.ts'
import { EntryRow, RegularRow } from '../interfaces/mod.ts'
import { log } from './logger.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'

/**
 * Persist a new row in the database.
 * @param table The name of the database table in which to persist the record.
 * @param record The record to persist (an _EntryRow_ or a _RegularRow_).
 */
export async function insert(table: string, record: EntryRow | RegularRow) {
  // TODO: try / catch
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
