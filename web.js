/**
 * Created by shtian on 5/21/2014.
 */
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000);