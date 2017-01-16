
var models = require('../models');
var express = require('express');
var router = express.Router();

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
    console.log(models.User);
    /*models.User.findAll({
        where: {
            username: req.body.username
        }
    }).then(function (user) {
        res.json({
            id: user.id,
            username: user.username,
            password: user.password
        });
    });*/

});

module.exports = router;