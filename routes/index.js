const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller');
const create_list_controller = require('../controllers/create_list_controller');
const delete_list_controller = require('../controllers/delete_list_controller');

router.get('/',home_controller);

router.use('/create-list',create_list_controller);

router.use('/delete-list',delete_list_controller);

module.exports = router;