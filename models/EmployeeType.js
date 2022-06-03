const EmployeeTypeSchema = require("../schemas/EmployeeType")
module.exports = sequelize => sequelize.define('EmployeeType', EmployeeTypeSchema, {
    timestamps: false,
    freezeTableName: true,
})
