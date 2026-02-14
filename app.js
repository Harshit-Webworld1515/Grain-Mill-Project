const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const  ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.post('/lists', (req, res) => {
    console.log(req.body);
    res.render('index', { list: req.body });
});
app.listen(port, () => {
    console.log(`Backend is listening on port ${port}`);
});