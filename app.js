const express = require('express');
var bodyParser = require('body-parser');
var RoutersArticle = require('./routers/Article');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.set( 'view engine' , 'ejs' );



app.use('/Article',RoutersArticle);

app.listen(3000,()=>{
    console.log("you are in Port : 3000")
});
