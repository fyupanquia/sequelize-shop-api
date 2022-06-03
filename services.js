const db = require("./lib/mysql")
const Employee = require("./models/Employee")
const EmployeeType = require("./models/EmployeeType")
const Shop = require("./models/Shop")
const EmployeeService = require("./services/employee")
const ShopService = require("./services/shop")

module.exports = (config) => {
    const sequelize = db(config)
    const EmployeeModel = Employee(sequelize);
    const EmployeeTypeModel = EmployeeType(sequelize);
    const ShopModel = Shop(sequelize);

    EmployeeModel.belongsTo(EmployeeTypeModel, { foreignKey: 'Type' });
    ShopModel.belongsTo(EmployeeModel, { foreignKey: 'EmployeeID' });

    return {
        Employee: EmployeeService({ EmployeeModel, EmployeeTypeModel }),
        Shop: ShopService({ ShopModel, EmployeeModel, EmployeeTypeModel }),
    }
}