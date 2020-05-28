import { db } from './provider.ts'
import { save } from 'https://deno.land/x/sqlite@v1.0.0/mod.ts'
import miniDate from 'https://deno.land/x/minidate@v1.0/mod.ts'

// validate first (import validator from validator)
// validator.entry(): boolean

const [category, amount, date] = Deno.args
console.log(Deno.args)

// transform input
// category: g => general
// category: G => general

// amount: 10.12 => -1012
// amount: -10.3 => -1030

// date:

const entry = {
  category,
  amount: -Math.abs(Number(amount)),
  date: miniDate(date),
}

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

  console.log(entry)

  await save(db)
}

db.close()
