const path = require('path')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')

const NODE_ENV = process.env.NODE_ENV || 'developement'
if (NODE_ENV == 'developement'){
    dotenv.load({path: path.join(__dirname, '..', '.env')})
}

const db_uri = process.env.DATABASE_URI || 'mysql://nodejs_course_user:123789@localhost:3306/nodejs_course'

const sequelize = new Sequelize(db_uri)

const User = sequelize.import(path.join(__dirname, 'User.js'))
const db = {}

db.User = User
db.sequelize = sequelize

module.exports = db