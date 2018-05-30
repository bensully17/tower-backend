
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {id: 1, uid: '123abc', name: 'Dr. Serrahn'}
      ]);
    });
};
