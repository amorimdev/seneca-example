'use strict'

module.exports = function FirstApp () {
  const seneca = this
  const role = 'first-app'

  const firstApp = (args, done) => {
    seneca.log.info('initiating call from the second app')

    seneca.act({ role: 'second-app' }, (err, response) => {
      if (err) {
        seneca.log.error(err)
        return done(null, { status: false, message: err.message || err })
      }

      seneca.log.info('response from the second app', response)

      return done(null, { status: true, result: 'Welcome to first app.' })
    })
  }

  seneca.add({ role }, firstApp)

  return {
    name: role
  }
}
