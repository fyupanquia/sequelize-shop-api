const ShopSchema = require("../schemas/Shop")

module.exports = sequelize => sequelize.define('Shop', ShopSchema, {
    timestamps: false,
    freezeTableName: true,
})