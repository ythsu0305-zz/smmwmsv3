module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return User;
};