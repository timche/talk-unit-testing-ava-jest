import test from 'ava'
import error from '../../4-error'

test('errors', t => {
  t.throws(() => {
    error('foo')
  }, 'foo')
})

test('does not error', t => {
  t.notThrows(() => {
    error('bar')
  })
})
