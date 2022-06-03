if (process.env.NODE_ENV === "prd") {
    module.exports = require("./prod")
} else {
    module.exports = require("./dev")
}
