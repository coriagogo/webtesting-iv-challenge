const db = require('../data/dbConfig.js');
const { insert, remove, find } = require('./charactersModel.js');
const request = require('supertest');

describe('characters model', () => {
  beforeEach(async () => {
    await db('characters').truncate();
  })

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('insert()', () => {
    it('should insert new characters', async () => {
      await insert({
        name: 'Hermione Granger',
        role: 'student',
        house: 'Gryffindor'
      })
      await insert({
        name: 'Ron Weasley',
        role: 'student',
        house: 'Gryffindor'
      })

      const characters = await db('characters');
      expect(characters).toHaveLength(2);
    })

    it('should insert the provided character', async () => {
      let character = {
        name: 'Hermione Granger',
        role: 'student',
        house: 'Gryffindor'
      }
      let inserted = await insert(character);
      expect(inserted.name).toBe(character.name)
    })    
  })

  describe('remove()', () => {
    it('should remove user', async () => {
      await insert({ name: 'Hermione Granger', role: 'student', house: 'Gryffindor' })      
      await remove(1);
      const characters = await find('characters');
      expect(characters).toHaveLength(0);
    })
  })

  
})