const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server', () => {

  describe('GET /', () => {

    describe('root directory get', () => {
      it('responds with 200 OK', () => {
        return request(server)
        .get('/')
        .expect(200);
      });

      it('responds with 200 OK', async () => {
        await request(server)
          .get('/')
          .expect('Content-Type', /json/i);
      })

      it('responds { message: "API is running!" }', async () => {
        await request(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: 'API is running!' })
          })
      })
    })
  })

  describe('POST /', () => {
    it('should return JSON', async () => {
      const character = ({ name: 'Hermione Granger', role: 'student', house: 'Gryffindor'})
      const res = await request(server).post('/characters').send(character);
      expect(res.type).toBe('application/json');
    })
  })

  
})