const greaterThan = require('../../2-greaterThan')

it('returns true', () => {
  expect(greaterThan(2, 1)).toBe(true)
})

it('returns false', () => {
  expect(greaterThan(1, 2)).toBe(false)
})
