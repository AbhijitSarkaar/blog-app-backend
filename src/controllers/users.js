const User = require('../models/user.model')

const getUsers = (req, res) => {
    User.getUsers((err, data) => {
        if(err) {
            res.status(500).send({
                message: 'error while fetching users'
            })
        }
        else res.send(data)
    })
}

module.exports = {
    getUsers
}
