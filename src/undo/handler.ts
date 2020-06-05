import { db } from '../shared/provider.ts'

export function undo(table: 'regulars' | 'entries') {
  db.query(`DELETE FROM ${table} WHERE id = (SELECT MAX(id) FROM ${table})`)
  db.close()
}
