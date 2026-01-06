const express = require("express")
const app = express()
const router = require("./routes/routes.js")
const errorMiddleware = require("./middleware/errorMiddleware.js")

app.use(express.json())

app.use("/api/users", router)

app.use(errorMiddleware)

module.exports = app