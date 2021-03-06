import { EntryRow, RegularRow } from '../../interfaces/mod.ts'
import { db } from '../../shared/provider.ts'

/**
 * Persist a new row in the database.
 * @param table The name of the database table in which to persist the record.
 * @param record The record to persist (an _EntryRow_ or a _RegularRow_).
 */
export function insert(table: string, record: EntryRow | RegularRow) {
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

  console.log('RECORD::', record)

  db.close()
}
