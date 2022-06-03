const EmployeeSchema = require("../schemas/Employee")

module.exports = sequelize => sequelize.define('Employee', EmployeeSchema, {
    timestamps: false,
    freezeTableName: true,
})
