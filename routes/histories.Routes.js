const express = require('express');
const router = express.Router();

const HistoriesControllers = require('../controllers/histories.controller');

router.get('/', HistoriesControllers.getAllHistory);

router.get('/:id', HistoriesControllers.getOneHistory);

module.exports = router;
