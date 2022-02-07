const express = require("express")
const StoneSchema = require('../../models/Stone.js')
var router = express.Router()

router.get('/', (req, res) => {
    StoneSchema.find({}, 'name img_url info link', (error, stones) => {
        res.send({
            stones
        })
    });
});

module.exports = router