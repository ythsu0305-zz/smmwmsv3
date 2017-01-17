var models = require('../models');
var express = require('express');
var router = express.Router();

///summery 認證 localhost:3000/auth

router.post('/', function (req, res) {
    console.log(models.User);
    models.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(function (users) {
        console.log(users);
        if (users) {
            res.json({
                id: users.id,
                session:req.session
            });
        } else {
            res.json({
                id: 0,
                session:req.session.id
            });
        }

    });

});

router.get('/:id', function (req, res) {
    res.json({
        message: req.params.id,
    });
});

module.exports = router;