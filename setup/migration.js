const keys = require("../config")
let connection = require("../lib/mysql");
const mysql = connection(keys)

const queryInterface = mysql.getQueryInterface();
const EmployeeTypeSchema = require("../schemas/EmployeeType")
const EmployeeSchema = require("../schemas/Employee")
const ShopSchema = require("../schemas/Shop")

const up = async () => {
    await queryInterface.createTable('EmployeeType', EmployeeTypeSchema)
    await queryInterface.createTable('Employee', EmployeeSchema)
    await queryInterface.createTable('Shop', ShopSchema)

    await queryInterface.bulkInsert('EmployeeType', [{
        Name: 'Manager',
        Salary: 4000
    }, {
        Name: 'Accountant',
        Salary: 4500
    }, {
        Name: 'Clerk',
        Salary: 4800
    }], {})
}

up();