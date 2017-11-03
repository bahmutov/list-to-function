'use strict'

/* eslint-env mocha */
const listToFunction = require('.')
const R = require('ramda')
const la = require('lazy-ass')
const is = require('check-more-types')

describe('list-to-function', () => {
  it('is a function', () => {
    la(is.fn(listToFunction))
  })

  it('returns a function', () => {
    const fn = listToFunction([])
    la(is.fn(fn))
  })

  it('returns 3 items with 3 calls', () => {
    const list = [1, 2, 3]
    const fn = listToFunction(list)
    la(fn() === 1)
    la(fn() === 2)
    la(fn() === 3)
  })

  it('does not mutate list', () => {
    const list = [1, 2, 3]
    const initial = R.clone(list)
    const fn = listToFunction(list)
    fn()
    fn()
    fn()
    la(R.equals(list, initial), 'list has been mutated', list)
  })

  it('returns undefined when list is exhausted', () => {
    const fn = listToFunction(['foo'])
    la(fn() === 'foo')
    la(fn() === undefined)
  })
})
