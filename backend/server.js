const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/router');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

const DB_URL = `mongodb+srv://${MONGO_PASS}@todolist.sweq1il.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(bodyParser.json());


app.get('/exercise', (req,res))


app.listen(3000, function() {
    console.log("listening on PORT 3000")
})

