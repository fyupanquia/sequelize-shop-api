const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const shop = require("./routes/shop")
const employee = require("./routes/employee")
const ErrorHandler = require("./middleware/ErrorHandler")

app.use(ErrorHandler.badRequest)
app.use("/employees", employee)
app.use("/shops", shop)
app.use("*", ErrorHandler.notFound)

app.use(ErrorHandler.fatalError)

process.on('uncaughtException', ErrorHandler.fatalError)
process.on('unhandledRejection', ErrorHandler.fatalError)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})