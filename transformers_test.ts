import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { expand, shiftDecimal } from './transformers.ts'

const { test } = Deno

/*
  EXPAND CATEGORIES
*/
test('it expand the short version of `general`', () => {
  assertEquals('general', expand('g'))
  assertEquals('general', expand('G'))
})

test('it expand the short version of `leisure`', () => {
  assertEquals('leisure', expand('l'))
  assertEquals('leisure', expand('L'))
})

test('it expand the short version of `culture`', () => {
  assertEquals('culture', expand('c'))
  assertEquals('culture', expand('C'))
})

test('it expand the short version of `extra`', () => {
  assertEquals('extra', expand('e'))
  assertEquals('extra', expand('E'))
})

test('it expand the short version of `income`', () => {
  assertEquals('income', expand('i'))
  assertEquals('income', expand('I'))
})

test('it works with anything that would start with the intended initials', () => {
  assertEquals('general', expand('general'))
  assertEquals('leisure', expand('loop'))
  assertEquals('culture', expand('CDN'))
  assertEquals('extra', expand('EDAMAME'))
  assertEquals('income', expand('island'))
})

test('it works with anything that starts with the intended initials', () => {
  assertEquals(undefined, expand(''))
  assertEquals(undefined, expand(' '))
})

/*
  shiftDecimal
*/
// test('it bla bla bla', () => {
//   assertEquals(-100, shiftDecimal('-1'))
//   assertEquals(-100, shiftDecimal('-1.0'))
//   assertEquals(-100, shiftDecimal('-1.00'))

//   // ceils

//   assertEquals(-101, shiftDecimal('-1.001'))
//   assertEquals(-1024, shiftDecimal('-10.23004'))
//   assertEquals(-10000, shiftDecimal('-100'))
// })

// test('it bla bla bla', () => {
//   assertEquals(-100, shiftDecimal('1'))
//   assertEquals(-100, shiftDecimal('1.0'))
//   assertEquals(-100, shiftDecimal('1.00'))

//   // ceils

//   assertEquals(-101, shiftDecimal('1.001'))
//   assertEquals(-1024, shiftDecimal('10.23004'))
//   assertEquals(-10000, shiftDecimal('100'))
// })

// test('it bla bla bla', () => {
//   assertEquals(-100, shiftDecimal('1,234'))
//   assertEquals(-100, shiftDecimal('12,34'))
// })
