const knex = require('./connection')

module.exports = {
    addNewAppt(body) {
        return knex('appointments')
        .insert(body)
        .returning('*')
        .then(newAppt => newAppt[0])
    },
    getUserAppts(uid) {
        return knex('appointments')
        .where('uid', uid)
    },
    getAllAppts() {
        return knex('appointments')
    }
}