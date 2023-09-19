const sql = require('./db')

const User = function(user) {
    this.name = user.name;
    this.password = user.password;
    this.about = user.about;
}

User.getUsers = (result) => {

    let query = 'select * from users;'

    sql.query(query, (err, res) => {
        if(err) {
            console.log('error getUsers', err)
            result(null, err)
            return;
        }

        console.log('users', res)
        result(null, res)
    })
}

module.exports = User