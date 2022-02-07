const express = require("express")
var router = express.Router()

const login = require("./admin/login")
const stone = require("./admin/stone")
const adminlist = require("./admin/adminlist")

router.get("/",(req,res) => {
    res.send("admin page")
})

router.use("/login",login)
router.use("/stone",stone)
router.use("/adminlist",adminlist)

module.exports = router