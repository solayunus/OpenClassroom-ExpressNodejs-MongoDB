const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipe');

const app = express();

mongoose.connect('mongodb+srv://solayunus19:pass1245@cluster0-7wg63.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyparser.json());

app.use('/api/recipes', recipeRoutes);
//exporting appjs

module.exports = app;