module.exports = a =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a !== 'foo') {
        return reject(new TypeError('expected `foo`'))
      }
      resolve('bar')
    }, 2000)
  })
