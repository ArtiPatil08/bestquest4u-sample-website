
var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var keysearchRouter=require('./controllers/keysearch');
var isPaidRouter=require('./controllers/isPaid');
var priceRouter=require('./controllers/price');
var yTkeywordRouter=require('./controllers/yTkeyword');
var channelTitleRouter=require('./controllers/channelTitle');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api/keysearch',keysearchRouter.keysearch);
app.get('/api/isPaid',isPaidRouter.isPaid);
app.get('/api/price',priceRouter.price);
app.get('/api/yTkeyword',yTkeywordRouter.yTkeyword);
app.get('/api/channelTitle',channelTitleRouter.channelTitle);


app.listen(8080)