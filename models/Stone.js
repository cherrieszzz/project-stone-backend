const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StoneSchema = new Schema({
    name: String,
    img_url: String,
    info: String,
    link: String,
});
const Stone = mongoose.model('Stone', StoneSchema)
module.exports = Stone;
//