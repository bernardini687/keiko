import { expand, toNegCents, toPosCents } from './transformers.ts'
import { assertEquals } from '../../deps.ts'

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
  assertEquals(toNegCents('-19'), -1900)
  assertEquals(toNegCents('-19.9'), -1989.9999999999998)
  assertEquals(toNegCents('-19.999'), -1999.8999999999999)
})

test('transforms positive numbers to negative cents', () => {
  assertEquals(toNegCents('1'), -100)
  assertEquals(toNegCents('19'), -1900)
  assertEquals(toNegCents('19.9'), -1989.9999999999998)
  assertEquals(toNegCents('19.999'), -1999.8999999999999)
})

test('transforms numbers separated by comma', () => {
  assertEquals(toNegCents('19,9'), -1989.9999999999998)
  assertEquals(toNegCents('19,999'), -1999.8999999999999)
})

/*
  toPosCents()
*/
test('transforms negative numbers to positive cents', () => {
  assertEquals(toPosCents('-1'), 100)
  assertEquals(toPosCents('-19'), 1900)
  assertEquals(toPosCents('-19.9'), 1989.9999999999998)
  assertEquals(toPosCents('-19.999'), 1999.8999999999999)
})

test('transforms positive numbers to positive cents', () => {
  assertEquals(toPosCents('1'), 100)
  assertEquals(toPosCents('19'), 1900)
  assertEquals(toPosCents('19.9'), 1989.9999999999998)
  assertEquals(toPosCents('19.999'), 1999.8999999999999)
})

test('transforms numbers separated by comma', () => {
  assertEquals(toPosCents('-19,9'), 1989.9999999999998)
  assertEquals(toPosCents('-19,999'), 1999.8999999999999)
})
