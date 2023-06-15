const express = require('express');
const app = express();
let ejs = require('ejs');
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=> {
  res.render('pages/index');
});

app.listen(3000);
console.log('Server is listening on port 3000\nhttp://localhost:3000/ ');