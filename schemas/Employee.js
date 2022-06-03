const { DataTypes } = require("sequelize");
module.exports = {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: DataTypes.STRING(50),
    Type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'EmployeeType', key: 'ID' }
    },
    Telephone: DataTypes.STRING(20),
    Address: DataTypes.TEXT,
    EmployementDate: DataTypes.DATE
}