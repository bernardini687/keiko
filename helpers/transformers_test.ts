import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { expand, toNegCents, toPosCents } from './transformers.ts'

const { test } = Deno

/*
  expand()
*/
test('expands the short version of `general`', () => {
  assertEquals(expand('g'), 'general')
  assertEquals(expand('G'), 'general')
})

test('expands the short version of `leisure`', () => {
  assertEquals(expand('l'), 'leisure')
  assertEquals(expand('L'), 'leisure')
})

test('expands the short version of `culture`', () => {
  assertEquals(expand('c'), 'culture')
  assertEquals(expand('C'), 'culture')
})

test('expands the short version of `extra`', () => {
  assertEquals(expand('e'), 'extra')
  assertEquals(expand('E'), 'extra')
})

test('expands the short version of `income`', () => {
  assertEquals(expand('i'), 'income')
  assertEquals(expand('I'), 'income')
})

test('works with anything that would start with the intended initials', () => {
  assertEquals(expand('general'), 'general')
  assertEquals(expand('loop'), 'leisure')
  assertEquals(expand('CDN'), 'culture')
  assertEquals(expand('EDAMAME'), 'extra')
  assertEquals(expand('island'), 'income')
})

test('returns `undefined` from empty strings', () => {
  assertEquals(expand(''), undefined)
  assertEquals(expand(' '), undefined)
  assertEquals(expand('\t'), undefined)
})

/*
  toNegCents()
*/
test('transforms negative numbers to negative cents', () => {
  assertEquals(toNegCents('-1'), -100)
  assertEquals(toNegCents('-1.2'), -120)
  assertEquals(toNegCents('-1.23'), -123)
  assertEquals(toNegCents('-123'), -12300)
})

test('transforms positive numbers to negative cents', () => {
  assertEquals(toNegCents('1'), -100)
  assertEquals(toNegCents('1.2'), -120)
  assertEquals(toNegCents('1.23'), -123)
  assertEquals(toNegCents('123'), -12300)
})

test('transforms numbers separated by comma', () => {
  assertEquals(toNegCents('1,0'), -100)
  assertEquals(toNegCents('1,234'), -123)
  assertEquals(toNegCents('12,34'), -1234)
  assertEquals(toNegCents('123,4'), -12340)
})

/*
  toPosCents()
*/
test('transforms negative numbers to positive cents', () => {
  assertEquals(toPosCents('-1'), 100)
  assertEquals(toPosCents('-1.2'), 120)
  assertEquals(toPosCents('-1.23'), 123)
  assertEquals(toPosCents('-123'), 12300)
})

test('transforms positive numbers to positive cents', () => {
  assertEquals(toPosCents('1'), 100)
  assertEquals(toPosCents('1.2'), 120)
  assertEquals(toPosCents('1.23'), 123)
  assertEquals(toPosCents('123'), 12300)
})

test('transforms numbers separated by comma', () => {
  assertEquals(toPosCents('1,0'), 100)
  assertEquals(toPosCents('1,234'), 123)
  assertEquals(toPosCents('12,34'), 1234)
  assertEquals(toPosCents('123,4'), 12340)
})
