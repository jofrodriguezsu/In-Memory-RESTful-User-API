const express = require("express")
const router = express.Router()
const {getAll, getOne, postUser, putUser, deleteUser} = require("../controller/userController.js")


router.get("/", getAll)

router.get("/:id", getOne)

router.post("/", postUser)

router.put("/:id", putUser)

router.delete("/:id", deleteUser)


module.exports = router