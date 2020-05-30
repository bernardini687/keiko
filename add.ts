import { log } from './logger.ts'
import { db } from './provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'
import miniDate from 'https://deno.land/x/minidate@v1.0/mod.ts'
import { expand, toNegativeCents } from './transformers.ts'
import { isEntry } from './validators.ts'

const { args } = Deno

log(args)

if (!isEntry(args)) {
  console.log('add [CATEGORY] [AMOUNT] [DATE]')
  Deno.exit()
}

const [category, amount, date] = args

/*
  {
    buildEntry(args)
  }
  {
    buildRegular(args)
  }
*/
const entry = {
  category: expand(category),
  amount: toNegativeCents(amount),
  date: miniDate(date),
}
const table = 'entries'

// won't be necessary, rather a try / catch
db.query(
  `
  INSERT INTO ${table} (
    category, amount, date
  ) VALUES (
    :category, :amount, :date
  );
  `,
  entry
)

log(entry)

await save(db)
db.close()
