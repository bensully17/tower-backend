
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments()
        table.string('name')
        table.date('dueDate')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
