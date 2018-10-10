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

// Edit route that populates the forms with data from server, link from index page
app.get('/components/:id/edit', (req, res) => {
    const data = {components: Components[req.params.id], id: req.params.id}
    res.render('edit.ejs', data)
})


// Put route that will change the element of your objects array, as specified by 
// the index in the URL, to req.body
app.put('/components/:id', (req, res) => {
    Components[req.params.id] = req.body;
    res.redirect('/components')
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})