const dotenv = require('dotenv')
dotenv.config()

const {HOST, USER, PASSWORD, DB} = process.env

module.exports = {
    HOST,
    USER,
    PASSWORD,
    DB
}