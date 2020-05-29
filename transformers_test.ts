import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { expand, toNegativeCents } from './transformers.ts'

const { test } = Deno

/*
  EXPAND CATEGORIES
*/
test('expands the short version of `general`', () => {
  assertEquals('general', expand('g'))
  assertEquals('general', expand('G'))
})

test('expands the short version of `leisure`', () => {
  assertEquals('leisure', expand('l'))
  assertEquals('leisure', expand('L'))
})

test('expands the short version of `culture`', () => {
  assertEquals('culture', expand('c'))
  assertEquals('culture', expand('C'))
})

test('expands the short version of `extra`', () => {
  assertEquals('extra', expand('e'))
  assertEquals('extra', expand('E'))
})

test('expands the short version of `income`', () => {
  assertEquals('income', expand('i'))
  assertEquals('income', expand('I'))
})

test('works with anything that would start with the intended initials', () => {
  assertEquals('general', expand('general'))
  assertEquals('leisure', expand('loop'))
  assertEquals('culture', expand('CDN'))
  assertEquals('extra', expand('EDAMAME'))
  assertEquals('income', expand('island'))
})

test('returns `undefined` from empty strings', () => {
  assertEquals(undefined, expand(''))
  assertEquals(undefined, expand(' '))
  assertEquals(undefined, expand('\t'))
})

/*
  toCents
*/
test('it bla bla bla', () => {
  assertEquals(-100, toNegativeCents('-1'))
  assertEquals(-120, toNegativeCents('-1.2'))
  assertEquals(-123, toNegativeCents('-1.23'))
  assertEquals(-12300, toNegativeCents('-123'))
})

test('it bla bla bla', () => {
  assertEquals(-100, toNegativeCents('1'))
  assertEquals(-120, toNegativeCents('1.2'))
  assertEquals(-123, toNegativeCents('1.23'))
  assertEquals(-12300, toNegativeCents('123'))
})

test('it bla bla bla', () => {
  assertEquals(-100, toNegativeCents('1,0'))
  assertEquals(-123, toNegativeCents('1,234'))
  assertEquals(-1234, toNegativeCents('12,34'))
  assertEquals(-12340, toNegativeCents('123,4'))
})

test('zero', () => {
  assertEquals(0, toNegativeCents('0'))
})
