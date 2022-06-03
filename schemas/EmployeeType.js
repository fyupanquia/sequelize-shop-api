const { DataTypes } = require("sequelize");
module.exports = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: DataTypes.STRING(50),
    Salary: DataTypes.DECIMAL(10, 2)
}