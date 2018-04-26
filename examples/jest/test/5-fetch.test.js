const fetch = require('../../5-fetch')

test('resolves', async () => {
  const result = await fetch('foo')
  expect(result).toBe('bar')
})

test('rejects', async () => {
  try {
    await fetch('oof')
  } catch (e) {
    expect(e.message).toBe('expected `foo`')
  }
})
