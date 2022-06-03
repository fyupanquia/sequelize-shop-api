const { Sequelize } = require("sequelize");

module.exports = (config) => {

    const sequelize = new Sequelize(config)
    sequelize.authenticate();

    return sequelize;
}