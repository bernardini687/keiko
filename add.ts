import { log } from './logger.ts'
import { db } from './provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'
import miniDate from 'https://deno.land/x/minidate@v1.0/mod.ts'

// validate args (import validator from validator)
// validator.entry(): boolean

// regex for /^[glce]|general|leisure|culture|extra$/ case insensitive

// if /^[i]|income$/ case insensitive => regulars
// regex for intervals

// regex for /^-?\n+[.,](?=\n*)$/
// regex for date format

const [category, amount, date] = Deno.args
log(Deno.args)

// transform input
// category: g => general
// category: G => general

// amount: 10.12 =>   -1012 =>   10,12
// amount: -10.3 =>   -1030 =>   10,30
// amount: -1000 => -100000 => 1000,00

const entry = {
  category,
  amount: -Math.abs(Number(amount)),
  date: miniDate(date),
}

// won't be necessary, rather a try / catch
if (Deno.args.length >= 2) {
  db.query(
    `
    INSERT INTO entries (
      category, amount, date
    ) VALUES (
      :category, :amount, :date
    );
    `,
    entry
  )

  log(entry)

  await save(db)
}

db.close()
