var express = require('express');
var app = express();

var parser = require('body-parser').urlencoded({extended: false});

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

app.post('/cong', parser, (req, res) => {
  var {a, b} = req.params;
  var kq = +a + (+b);
  console.log(kq);
  var result = {
    ketqua: kq,
    soa: 1,
    sob: 55
  }
  res.json(result);
});
