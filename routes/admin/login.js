const express = require("express")
var router = express.Router()

router.get("/",(req,res) => {
   
})
router.post("doLogin",(req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let verift = req.body.verify
})

module.exports = router