var usersController = require('../controllers/users_controller.js');
var express = require('express');
var userRoutes = express.Router();

userRoutes.route('/user')
.post(usersController.create)
.get(usersController.getAllUsers)

userRoutes.route('/user/:id')
.get(usersController.show)
.patch(usersController.update)
.delete(usersController.destroy)

module.exports = userRoutes;
