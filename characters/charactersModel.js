const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(character) {
  return db('characters')
    .insert(character, 'id')
    .then(ids => {
      return db('characters')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return db('characters')
    .where({ id })
    .delete();
}

function find() {
  return db('characters');
}

function findById(id) {
  return null;
}