import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isEntry, isRegular } from './validators.ts'

const { test } = Deno

/*
  isEntry()
*/
test('date is optional', () => {
  let args = ['general', '1']
  assert(isEntry(args))

  args = ['general', '1', '']
  assert(isEntry(args))
})

test('regular is not an entry', () => {
  const args = ['extra', '50', 'y']
  assertEquals(isEntry(args), false)
})

test('valid entry', () => {
  const args = ['general', '1', '1']
  assert(isEntry(args))
})

test('invalid entry', () => {
  const args = ['foo', 'bar', 'baz']
  assertEquals(isEntry(args), false)
})

test('valid categories', () => {
  let args = ['G', '1', '1-1']
  assert(isEntry(args))

  args = ['income', '1', '1-1-1000']
  assert(isEntry(args))
})

test('invalid categories', () => {
  let args = ['foo', '1', '1-1']
  assertEquals(isEntry(args), false)

  args = ['100', '1', '1-1-1000']
  assertEquals(isEntry(args), false)
})

test('valid amounts', () => {
  let args = ['G', '10,00', '1-1']
  assert(isEntry(args))

  args = ['income', '43.20', '1-1-1000']
  assert(isEntry(args))
})

test('invalid amounts', () => {
  let args = ['G', 'foo', '1-1']
  assertEquals(isEntry(args), false)

  args = ['income', '32-32', '1-1-1000']
  assertEquals(isEntry(args), false)

  args = ['income', '32.320', '1-1-1000']
  assertEquals(isEntry(args), false)
})

test('valid dates', () => {
  let args = ['general', '1', '1-1']
  assert(isEntry(args))

  args = ['general', '1', '1-1-1000']
  assert(isEntry(args))
})

test('invalid dates', () => {
  let args = ['general', '1', '1-']
  assertEquals(isEntry(args), false)

  args = ['general', '1', '1-1-']
  assertEquals(isEntry(args), false)
})

/*
  isRegular()
*/
test('valid regular', () => {
  const args = ['extra', '50', 'y']
  assert(isRegular(args))
})

test('invalid regular', () => {
  const args = ['foo', 'bar', 'baz']
  assertEquals(isRegular(args), false)
})

test('entry is not a regular', () => {
  const args = ['general', '1', '1']
  assertEquals(isRegular(args), false)
})

test('valid intervals', () => {
  let args = ['general', '1', 'month']
  assert(isRegular(args))

  args = ['general', '1', 'M']
  assert(isRegular(args))
})

test('invalid intervals', () => {
  let args = ['general', '1', 'daily']
  assertEquals(isRegular(args), false)

  args = ['general', '1', 'D']
  assertEquals(isRegular(args), false)
})
