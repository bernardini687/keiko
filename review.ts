import { db } from './provider.ts'

const rows = db.query(
  `
  SELECT * FROM entries;
  `,
  []
)

for (const row of rows) {
  console.log(row)
}

db.close()
