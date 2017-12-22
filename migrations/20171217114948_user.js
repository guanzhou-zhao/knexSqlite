
exports.up = function(knex, Promise) {
  console.log('migrate user...')
  return knex.schema.createTableIfNotExists('user', function (table) {
    table.integer('id').primary()
    table.string('username')
    table.string('email')
    table.binary('hash')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
