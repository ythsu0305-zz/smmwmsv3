var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        message: "helo"
    });
});

module.exports = router;