const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const Components = require('./components');


app.listen(3000, () => {
    console.log('listening on port 3000')
})