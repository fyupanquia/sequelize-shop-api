const express = require("express");
const asyncify = require("express-asyncify");
const api = asyncify(express.Router());
const keys = require("../config")
const services = require("../services")
let Services
api.use("*", async (req, res, next) => {
    if (!Services) {
        Services = await services(keys)
    }
    next();
})

api.get("/:id", async (req, res, next) => {
    const employee = await Services.Employee.find(req.params.id)
    res.send(employee)
})
api.post("/", async (req, res, next) => {
    const saved = await Services.Employee.save(null, req.body)
    res.send(saved)
})
api.put("/:id", async (req, res, next) => {
    const success = await Services.Employee.save(req.params.id, req.body)
    res.send({
        success
    })
})

api.delete("/:id", async (req, res, next) => {
    const success = await Services.Employee.remove(req.params.id)
    res.send({
        success
    })
})

module.exports = api