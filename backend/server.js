const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/router');
const ejs = require('ejs');
const path = require('path');
const { Server } = require('http');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

const DB_URL = `mongodb+srv://${MONGO_PASS}@todolist.sweq1il.mongodb.net/?retryWrites=true&w=majority`

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
    })
    .then(() => {
        console.log('We are connected to MongoDB')
    })


app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))


app.get('/exercise', (req,res))


app.listen(PORT, async() => {
    console.log(`Server is up on port ${PORT}`)
});

