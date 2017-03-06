const express = require('express')
const router = express.Router()

const HomeAPIController = require('../controllers/HomeAPIController')

//router.get('/users', HomeAPIController.getUsers)
//router.post('/users', HomeAPIController.createUser)
router.route('/users')
  .get(HomeAPIController.getUsers)
  .post(HomeAPIController.createUser)
  //.put(HomeAPIController.updateUser)
  //.delete(HomeAPIController.deleteUser)
//Neu binh thuong thi tao 4 duong dan (route), nhung restFULL chi can 1 duong dan
// /users thoi, va khi send /users thi kem theo method (GET, POST, PUT, DELETE)
// method nay duoc dinh nghia trong header khi send tu client len server
// example: <form action="POST/PUT/GET/DELETE">
router.get('/users/:username', HomeAPIController.getUser)

module.exports = router