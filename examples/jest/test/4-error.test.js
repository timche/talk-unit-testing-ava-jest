const error = require('../../4-error')

test('errors', () => {
  expect(() => {
    error('foo')
  }).toThrow('foo')
})

test('does not error', () => {
  expect(() => {
    error('bar')
  }).not.toThrow()
})
