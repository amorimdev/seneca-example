'use strict'

/* eslint-env mocha */
/* eslint no-debugger: off */

const { expect } = require('chai')
const { Seneca } = require('./second-app.helpers')
const role = 'second-app'

describe('Second App Tests', () => {
  let seneca = null

  before(done => {
    Seneca()
      .then(instance => {
        seneca = instance
        return done()
      })
      .catch(done)
  })

  beforeEach(() => { debugger })

  it('Expect seneca instance not equal to null', done => {
    expect(seneca).not.to.equal(null)
    done()
  })

  it('Expected to run second app successfully', done => {
    try {
      seneca.act({ role }, (err, response) => {
        expect(err).to.be.equal(null)
        expect(typeof response).to.be.equal('object')
        expect(response.status).to.be.equal(true)
        expect(response.result).to.be.equal('Welcome to second app.')
        done()
      })
    } catch (err) {
      done(err)
    }
  })

  after(done => {
    seneca.close()
    done()
  })
})
