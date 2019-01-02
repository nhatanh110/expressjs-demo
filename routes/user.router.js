var express = require('express');
var multer = require('multer')

var router = express.Router();
var validate = require('../validate/user.validate');
var controller = require('../controllers/user.controller');
var upload = multer({ dest: './public/uploads' })

router.get("/" ,controller.index);

// Search method using query

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", 
    upload.single('avatar'), 
    validate.postCreate, 
    controller.postCreate
);

module.exports = router;