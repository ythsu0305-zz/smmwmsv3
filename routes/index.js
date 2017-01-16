
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        message: "helo"
    });
});

router.get('/auth/:id', function (req, res) {
    res.json({
        message: req.params.id,
    });
});

router.post('/auth', function (req, res) {
    console.log(models.User);
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (users) {
        console.log(users);
        res.json({
            id: users.id,
            username: users.username,
            password: users.password
        });
    });

});

module.exports = router;