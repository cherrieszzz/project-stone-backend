const express = require("express")
var router = express.Router()
const stones = require("./api/stones")

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});
router.use("/stones", stones)
module.exports = router