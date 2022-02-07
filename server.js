const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const router = express.Router();
const admin = require('./routes/admin')
const api = require('./routes/api')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use("/admin", admin);
app.use("/api", api);

// Connected to MongoDB
const URI = 'mongodb+srv://zpyqaq:zpy020923@cluster0.6d1um.mongodb.net/stones-datebase?retryWrites=true&w=majority';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});


// Include controllers
fs.readdirSync("controllers").forEach(function (file) {
    if (file.substr(-3) == ".js") {
        const route = require("./controllers/" + file)
        route.controller(app)
    }
})

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);

app.listen(port, function () {
    console.log(`api running on port ${port}`);
});