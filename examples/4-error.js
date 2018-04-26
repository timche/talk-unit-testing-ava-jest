module.exports = a => {
  if (a === 'foo') {
    throw new Error('foo')
  }
  return 'bar'
}
