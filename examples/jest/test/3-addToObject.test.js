const addToObject = require('../../3-addToObject')

it('adds to object', () => {
  expect(addToObject('b', 2, { a: 1 })).toEqual({ a: 1, b: 2 })
})
