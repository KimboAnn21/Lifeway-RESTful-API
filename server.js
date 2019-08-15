var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json({ type: 'application/*+json'}))
app.use()

//base code, will modify with 'id' and 'message'
app.get('/', (req, res) => {
    res.send ({text: 'total count'})
})

app.post('/', function(req, res) {
    res.send(req.body);
})

app.listen(3000, (err) => {
    if(err) {throw err}
    console.log('Server up and running on port 3000. . .')
})
