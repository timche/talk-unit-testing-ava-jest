import test from 'ava'
import greaterThan from '../../2-greaterThan'

test('returns true', t => {
  t.true(greaterThan(2, 1))
})

test('returns false', t => {
  t.false(greaterThan(1, 2))
})
