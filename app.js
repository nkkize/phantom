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

router.get('/iframe-popups', (req, res) => {
    res.render('iframe-popups', { title: 'iframe-popups' });
});

router.get('/iframe-popups-to-escape-sandbox', (req, res) => {
    res.render('iframe-popups-to-escape-sandbox', { title: 'iframe-popups-to-escape-sandbox' });
});

router.get('/iframe-same-origin', (req, res) => {
    res.render('iframe-same-origin', { title: 'iframe-same-origin' });
});

router.get('/iframe-top-navigation', (req, res) => {
    res.render('iframe-top-navigation', { title: 'iframe-top-navigation' });
});

router.get('/iframe-top-navigation-by-user-activation', (req, res) => {
    res.render('iframe-top-navigation-by-user-activation', { title: 'iframe-top-navigation-by-user-activation' });
});

router.get('/iframe-orientation-lock', (req, res) => {
    res.render('iframe-orientation-lock', { title: 'iframe-orientation-lock' });
});

router.get('/iframe-presentation', (req, res) => {
    res.render('iframe-presentation', { title: 'iframe-presentation' });
});

router.get('/presentation', (req, res) => {
    res.render('presentation', { title: 'presentation' });
});

// Listen
app.listen(4000, function () {
    console.log("Live at Port 4000");
});