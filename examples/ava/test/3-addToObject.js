import test from 'ava'
import addToObject from '../../3-addToObject'

test('adds to object', t => {
  t.deepEqual(addToObject('b', 2, { a: 1 }), { a: 1, b: 2 })
})
