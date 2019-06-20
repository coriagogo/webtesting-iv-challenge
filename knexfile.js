// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hp.db3'
    },
    useNullAsDefault: true,

    migrations: {
      directory: './data/migrations',
    },
  },

    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/testDB.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      }
    }
  
};
