const UserService = require('../services/UserService')
const getIndexView = (req, res) => {
    //res.send("Home page")
    const model = {
        user: {
            name: 'thuongtran',
            email: 'thuong.tran@dounets.com'
        },
        title: 'Homepage'
    }
    //res.render('home')
    res.render('home', model)
}

const getContactView = (req, res) => {
    res.render('contact')
}

const getAddUserView = (req, res) => {
    res.render('add-user')
}

const postAddUser = (req, res) => {
    //Goi qua cho service xu ly, vao db lay du lieu
    const username = req.body.username
    const email = req.body.email
    UserService.addUser(username, email)
        .then((user) => {
            console.log(`Added 1 user: `, user)
            res.redirect('/add-user')
        })
}

const getUserListView = (req, res) => {
    UserService.getUserList()
    .then((users) => {
        console.log(`Users List: `, users)
        res.render('user-list', {
            users: users
        })
    })
}

module.exports = {
    getIndexView,
    getContactView,
    getAddUserView,
    postAddUser,
    getUserListView,
}