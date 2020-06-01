import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { formatAmt, formatDate, formatPct } from './formatters.ts'

const { test } = Deno

/*
formatAmt()
*/
test('formats the amount from cents', () => {
  assertEquals(formatAmt(2000), '20,00')
  assertEquals(formatAmt(-300), '-3,00')
})

/*
  formatDate()
*/
test('formats the date into `MMM DD`, space-padded', () => {
  assertEquals(formatDate(new Date(2020, 5, 1)), 'Mon  1')
  assertEquals(formatDate(new Date(2020, 4, 31)), 'Sun 31')
})

/*
  formatPct()
*/
test('formats the given number into a percentage, rounding it', () => {
  assertEquals(formatPct(3), '3%')
  assertEquals(formatPct(3.333), '3%')
  assertEquals(formatPct(3.6), '4%')
})
