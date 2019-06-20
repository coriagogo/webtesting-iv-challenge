
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', tbl => {
    tbl.increments();

    tbl
      .string('name', 255)
      .notNullable();

    tbl 
      .string('role', 255)
      .notNullable();
    
    tbl
      .string('house', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters');
};
