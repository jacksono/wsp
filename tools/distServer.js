
const open = require('open');
const path = require('path');
const express = require('express');
/* eslint-disable no-console */

// const port = 8080;
const port = process.env.PORT;
const app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

// app.listen(process.env.PORT || 5000)
// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`http://localhost:${port}`);
//   }
// });
app.set('port', (process.env.PORT || 8080));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
