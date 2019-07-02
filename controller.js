exports.process = function (req, res) {
    if (req.body) {
        console.log('received post data: '+JSON.stringify(req.body));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send('success');
    }
};