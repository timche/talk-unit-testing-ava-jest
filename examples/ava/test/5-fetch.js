import test from 'ava'
import fetch from '../../5-fetch'

test('resolves', async t => {
  const result = await fetch('foo')
  t.is(result, 'bar')
})

test('rejects', async t => {
  try {
    await fetch('oof')
  } catch (e) {
    t.is(e.message, 'expected `foo`')
  }
})
