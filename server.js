const express = require("express")
const app = express()
const PORT = 3000
const router = require("./routes/routes.js")


app.use(express.json())

app.use("/users", router)


app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})