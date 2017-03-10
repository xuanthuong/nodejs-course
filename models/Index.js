const path = require('path')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')

const NODE_ENV = process.env.NODE_ENV || 'developement'
if (NODE_ENV == 'developement'){
    dotenv.load({path: path.join(__dirname, '..', '.env')})
}

process.env.DATABASE_URI = 'mysql://nodejs_course:123456@localhost:3306/nodejs_course'
const sequelize = new Sequelize(process.env.DATABASE_URI)

const User = sequelize.import(path.join(__dirname, 'User.js'))
const db = {}

db.User = User
db.sequelize = sequelize

module.exports = db