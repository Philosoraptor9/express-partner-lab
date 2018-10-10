const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const Components = require('./components');

app.get('/', (req, res) => {
    res.send('If we build it, they will compute...')
  });

app.get('/components', (req, res) => {
    const context = {components: Components};
    res.render('index.ejs', context)
})

app.delete('/components/:id', (req, res) => {
console.log(req.params.id, 'id in delete route');
Components.splice(req.params.id, 1);
res.redirect('/components')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})