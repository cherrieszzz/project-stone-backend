const express = require("express")
const AdminSchema = require('../../models/Admin.js')
var router = express.Router()

router.get('/', (req, res) => {
    AdminSchema.find({}, 'username  email', (error, admins) => {
        res.send({
            admins
        })
    });
});

module.exports = router