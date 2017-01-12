var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    res.json({
        message: "helo"
    });
});

router.get('/auth/:id', function (req, res, next) {
    res.json({
        message: req.params.id,
    });
});

router.post('/auth', function (req, res, next) {
    res.json({
        id: req.body.id,
        password: req.body.password,
        session: req.session.id,
    });
});

module.exports = router;
