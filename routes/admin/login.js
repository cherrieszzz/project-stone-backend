const express = require("express")
var router = express.Router()
const AdminSchema = require("../../models/Admin.js")
const jwt = require('jsonwebtoken')
router.use(express.json())

router.get("/", (req, res) => {
    res.send("login page")
})

router.post("/doLogin", async (req, res) => {
    const user = req.body
    const result = await AdminSchema.find(user)
    //验证该管理员是否存在于数据库
    if(result.length > 0){
        const token = jwt.sign({
            id:String(user._id),
        },'ajsnoidjsaoidjnoaiw')
        res.status(200).send({
            user,
            token:token
        })
    }else{
        res.status(422).send({
            message:"用户名或密码错误",
        })
    }
})

module.exports = router