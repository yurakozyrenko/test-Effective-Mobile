const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');

router.post('/', UsersControllers.createUser);

router.put('/:id', UsersControllers.updateUser);

router.get('/', UsersControllers.getAllUsers);

module.exports = router;
