const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const controller = require('./controller');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var router = express.Router();

router.post("/post-data", function (req, res) {
    controller.process(req, res);
});

router.post("/post-form-data", function (req, res) {
    controller.process(req, res);
});

app.use("/", router);

router.get('/iframe', (req, res) => {
    res.render('iframe', { title: 'iframe' });
});

router.get('/iframe-forms', (req, res) => {
    res.render('iframe-forms', { title: 'iframe' });
});

router.get('/iframe-modals', (req, res) => {
    res.render('iframe-modals', { title: 'iframe-modals' });
});

router.get('/iframe-pointer-lock', (req, res) => {
    res.render('iframe-pointer-lock', { title: 'iframe-pointer-lock' });
});

router.get('/iframe-xhr', (req, res) => {
    res.render('iframe-xhr', { title: 'iframe-xhr' });
});

// Listen
app.listen(4000, function () {
    console.log("Live at Port 4000");
});