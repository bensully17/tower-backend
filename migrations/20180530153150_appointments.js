
exports.up = function(knex, Promise) {
    return knex.schema.createTable('appointments', (table) => {
        table.increments()
        table.string('uid')
        table.string('name')
        table.date('date')
        table.time('time')
        table.string('description')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('appointments')

};
