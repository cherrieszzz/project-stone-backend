const express = require("express");
const Stone = require("../../models/Stone.js");
const StoneSchema = require('../../models/Stone.js')
const mongoose = require('mongoose');
var router = express.Router()

//获取商品全部数据
router.get('/', (req, res) => {
    StoneSchema.find({}, 'name img_url info link', (error, stones) => {
        res.send({
            stones
        })
    });
});

//增加商品
router.post('/addstone', (req, res) => {
    const newStone = new StoneSchema({
        name: req.body.name,
        img_url: req.body.img_url,
        info: req.body.info,
        link: req.body.link,
    });
    newStone.save((error, stone) => {
        if (error) { console.log(error); }
        res.send(stone);
    });
});

//更新商品
router.post('/update', (req, res) => {
    const _id = req.body._id
    const updateStone = {
        name: req.body.name,
        img_url: req.body.img_url,
        info: req.body.info,
        link: req.body.link,
    }
    StoneSchema.findByIdAndUpdate(_id, updateStone, {}, (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                success: "true"
            })
        }

    })
})

//删除商品
router.post('/delete', (req, res) => {
    const id = req.body.id
    StoneSchema.findByIdAndDelete(id)
        .then(result => {
            res.json({
                success: "true"
            })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router