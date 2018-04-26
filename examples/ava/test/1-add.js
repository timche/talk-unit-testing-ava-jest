import test from 'ava'
import add from '../../1-add'

test('adds two numbers', t => {
  t.is(add(1, 2), 3)
})
