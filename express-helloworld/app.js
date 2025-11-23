var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

