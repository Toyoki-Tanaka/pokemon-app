require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})






const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use((req, res, next) => {
    console.log(("Middleware: I run for all routes"));
    next();
});
app.use(express.urlencoded({ extended: false }))


// Index
app.get('/pokemon', async (req, res) => {
    try {
        const foundPokemon = await Pokemon.find({})
        res.status(200).render('Index', {
            pokemon: foundPokemon,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create Route
app.post('/pokemon', async (req, res) => {

    try {
        const createdPokemon = await Pokemon.create(req.body)
        res.status(201).redirect('pokemon')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Show Route
app.get('/pokemon/:id', async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Show', {
            pokemon: foundPokemon,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})






app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});