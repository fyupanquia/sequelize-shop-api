const { DataTypes } = require("sequelize");
module.exports = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: DataTypes.STRING(50),
    Address: DataTypes.TEXT,
    Telephone: DataTypes.STRING(50),
    EmployeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Employee', key: 'ID' }
    }
}