var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

app.use(history());

app.use(express.static(__dirname + '/app/'));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'));
