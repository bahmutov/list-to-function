'use strict'

function listToFunction (list) {
  console.assert(Array.isArray(list), 'expected an array')
  const remaining = [...list]
  return function nextItem () {
    if (remaining.length) {
      const item = remaining.shift()
      return item
    }
  }
}

module.exports = listToFunction
