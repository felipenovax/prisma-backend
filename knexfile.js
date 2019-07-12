module.exports = {
  client: 'mysql',
    connection: {
      database: 'prismaweb',
      user:     'root',
      password: 's3nh4Segur@'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
