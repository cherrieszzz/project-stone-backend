const StoneSchema = require('../models/Stone.js')
module.exports.controller = (app) => {
    // fetch all movies
    app.get('/stones', (req, res) => {
        StoneSchema.find({},'name img_url info link',(error,stones) => {
            res.send({
                stones
            })
        });

        //StoneSchema.find({}, 'name info link', (error,stones) => {
        //    if (error) { console.log(error); }
        //        res.send({
        //         stones,
         //       });
        //});
    });
    // add a new movie
    app.post('/stones', (req, res) => {
        const newStone = new StoneSchema({
            name: req.body.name,
            img_url:req.body.img_url,
            info: req.body.info,
            link: req.body.link,
        });
        newStone.save((error, stone) => {
            if (error) { console.log(error); }
            res.send(stone);
        });
    });
};