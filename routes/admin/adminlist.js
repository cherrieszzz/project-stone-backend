const express = require("express")
const adminSchema = require('../../models/admin')
var router = express.Router()

router.get('/', (req, res) => {
    adminSchema.find({}, 'username password email', (error, admin) => {
        res.send({
            admin
        })
    });
});

module.exports = router