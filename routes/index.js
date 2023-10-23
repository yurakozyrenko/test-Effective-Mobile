const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.Routes');
const historiesRoutes = require('./histories.Routes');

router.use('/histories', historiesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
