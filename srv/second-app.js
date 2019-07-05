'use strict'

const ENVS = process.env
const LOG_LEVEL = ENVS.LOG_LEVEL || 'info+'

const Seneca = require('seneca')

const seneca = Seneca({
  tag: 'second-app',
  log: {
    level: LOG_LEVEL
  }
})

seneca.listen(50002)
const SecondApp = require('../src/second-app')
seneca.use(SecondApp)
seneca.client(50001)

module.exports = seneca
