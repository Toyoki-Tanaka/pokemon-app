const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon')


const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

// Index
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon })
})

//Show
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})







app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});