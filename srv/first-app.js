'use strict'

const ENVS = process.env
const LOG_LEVEL = ENVS.LOG_LEVEL || 'info+'

const Seneca = require('seneca')

const seneca = Seneca({
  tag: 'first-app',
  log: {
    level: LOG_LEVEL
  }
})

seneca.listen(50001)
const FirstApp = require('../src/first-app')
seneca.use(FirstApp)
seneca.client(50002)

module.exports = seneca
