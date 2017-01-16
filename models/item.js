module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define('item', {
        description: DataTypes.STRING, //品名
        pattern: DataTypes.STRING, //規格
        quantity: DataTypes.STRING, //數量
        unitprice: DataTypes.STRING, //單價
        amount: DataTypes.STRING, //金額
        remark: DataTypes.STRING, //註記
    });
    return Item;
};