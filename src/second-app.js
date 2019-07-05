'use strict'

module.exports = function SecondtApp () {
  const seneca = this
  const role = 'second-app'

  const secondApp = (args, done) => done(null, { status: true, result: 'Welcome to second app.' })

  seneca.add({ role }, secondApp)

  return {
    name: role
  }
}
