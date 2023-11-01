const { describe, it, before, after} = require('mocha')
const supertest = require('supertest')
describe('API suite test', ()=> {
  let app
  before((done) => {
    app = require('./src/api')
    app.once('listening', done)
  })

  after(done => app.close(done))
  describe('/contact', () => {
    it('should request the contact route and return  HTTP status 200', async ()=> {
      const response = await supertest(app)
      .get('/contact')
      .expect(200)
    })
  })

  describe('/contact', () => {
    it('should request the contact route and return  HTTP status 200', async ()=> {
      const response = await supertest(app)
      .post('/login')
      .send({ name: 'vaz', password: '123'})
      .expect(200)
    })
  })

  describe('/login failed', () => {
    it('should request the login route and return  HTTP status 401', async ()=> {
      const response = await supertest(app)
      .post('/login')
      .send({ name: 'vdaz', password: '123'})
      .expect(401)
    })
  })

  describe('/hi:get 404 failed', () => {
    it('should request and existing route and return  HTTP status 404', async ()=> {
      const response = await supertest(app)
      .get('/hi')
      .expect(404)
    })
  })
})