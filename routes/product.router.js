var express = require('express');
var validate = require('../validate/user.validate');

var router = express.Router();

var controller = require('../controllers/product.controller');

router.get("/", controller.index);


module.exports = router;