/*============================
 *	requires
 ==============================*/
var express = require('express');
var path = require('path');
var app = express();

/*============================
 *	program specific requires
 ==============================*/
//set port
var port = process.env.PORT || 8080;

 app.use(express.static(path.join(__dirname,'./../dist')));
app.listen(port);
console.log('backend API listening at' + port);

