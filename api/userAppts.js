const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res) => {
    queries.getAllAppts()
    .then(appts => res.json(appts))
})

router.get('/:uid', (req, res) => {
    queries.getUserAppts(req.params.uid)
    .then(appts => res.json(appts))
})


router.post('/', (req, res) => {
    queries.addNewAppt(req.body)
    .then(newAppt => {
        res.status(201).json({newAppt})
    })
} )

module.exports = router