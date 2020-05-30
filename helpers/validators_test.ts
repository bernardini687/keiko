import { assert } from 'https://deno.land/std/testing/asserts.ts'
import { isEntry } from './validators.ts'

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

// test('regular is not an entry', () => {})

test('valid entry', () => {
  const args = ['general', '1', '1']
  assert(isEntry(args))
})

test('invalid entry', () => {
  const args = ['foo', 'bar', 'baz']
  assert(!isEntry(args))
})

test('valid categories', () => {
  let args = ['G', '1', '1-1']
  assert(isEntry(args))

  args = ['income', '1', '1-1-1000']
  assert(isEntry(args))
})

test('invalid categories', () => {
  let args = ['foo', '1', '1-1']
  assert(!isEntry(args))

  args = ['100', '1', '1-1-1000']
  assert(!isEntry(args))
})

test('valid amounts', () => {
  let args = ['G', '10,00', '1-1']
  assert(isEntry(args))

  args = ['income', '43.20', '1-1-1000']
  assert(isEntry(args))
})

test('invalid amounts', () => {
  let args = ['G', 'foo', '1-1']
  assert(!isEntry(args))

  args = ['income', '32-32', '1-1-1000']
  assert(!isEntry(args))

  args = ['income', '32.320', '1-1-1000']
  assert(!isEntry(args))
})

test('valid dates', () => {
  let args = ['general', '1', '1-1']
  assert(isEntry(args))

  args = ['general', '1', '1-1-1000']
  assert(isEntry(args))
})

test('invalid dates', () => {
  let args = ['general', '1', '1-']
  assert(!isEntry(args))

  args = ['general', '1', '1-1-']
  assert(!isEntry(args))
})

/*
  isRegular()
*/
// test('valid regular', () => {})
// test('invalid regular', () => {})
// test('entry is not a regular', () => {})
// test('valid intervals', () => {})
// test('invalid intervals', () => {})
