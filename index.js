var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started.'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/jquery', (req, res) => {
  res.render('jquery');
})

app.get('/cong/:a/:b', (req, res) => {
  var {a, b} = req.params;
  res.send(parseInt(a) + parseInt(b) + '');
});
