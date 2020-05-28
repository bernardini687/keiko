import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { expandCategory, shiftDecimal } from './transformers.ts'

const { test } = Deno

/*
  expandCategory
*/
test('it expand the short version of `general`', () => {
  assertEquals('general', expandCategory('g'))
  assertEquals('general', expandCategory('G'))
})

test('it expand the short version of `leisure`', () => {
  assertEquals('leisure', expandCategory('l'))
  assertEquals('leisure', expandCategory('L'))
})

test('it expand the short version of `culture`', () => {
  assertEquals('culture', expandCategory('c'))
  assertEquals('culture', expandCategory('C'))
})

test('it expand the short version of `extra`', () => {
  assertEquals('extra', expandCategory('e'))
  assertEquals('extra', expandCategory('E'))
})

test('it expand the short version of `income`', () => {
  assertEquals('income', expandCategory('i'))
  assertEquals('income', expandCategory('I'))
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
