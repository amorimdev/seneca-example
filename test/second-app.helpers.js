'use strict'

function Seneca (done) {
  return new Promise((resolve, reject) => {
    const seneca = require('../srv/second-app')
    seneca.test(done)
    seneca.ready(err => {
      if (err) return reject(err)
      return resolve(seneca)
    })
  })
}

module.exports = {
  Seneca
}
