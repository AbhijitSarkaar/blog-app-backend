const express = require('express')
const router = express.Router()
const {
    getUsers
} = require('../controllers/users')

router.route('/users').get(getUsers)

module.exports = router