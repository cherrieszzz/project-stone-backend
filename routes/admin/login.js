const express = require("express")
var router = express.Router()
const AdminSchema = require("../../models/Admin.js")
router.use(express.json())

router.get("/", (req, res) => {
    res.send("login page")
})

router.post("/doLogin", async (req, res) => {
    const user = req.body
    const result = await AdminSchema.find(user)
    //验证该管理员是否存在于数据库
    if(result.length > 0){
        res.send({
            message:"login success",
            status:1
        })
    }else{
        res.send({
            message:"login failed",
            status:0
        })
    }
})

module.exports = router