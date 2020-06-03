import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { formatAmt, formatDate, formatPct } from './formatters.ts'

const { test } = Deno

/*
formatAmt()
*/
test('formats the amount from cents', () => {
  assertEquals(formatAmt(1989.9999999999998), '19,90')
  assertEquals(formatAmt(-1999.8999999999999), '-20,00')
})

/*
  formatDate()
*/
test('formats the date into `ddd d`', () => {
  assertEquals(formatDate(new Date(2020, 4, 31)), 'Sun 31')
  assertEquals(formatDate(new Date(2020, 5, 1)), 'Mon 1')
})

/*
  formatPct()
*/
test('formats the given number into a percentage, rounding it', () => {
  assertEquals(formatPct(3), '3%')
  assertEquals(formatPct(3.3333333333333335), '3%')
  assertEquals(formatPct(3.6666666666666665), '4%')
})
