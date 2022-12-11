const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


app.get('/exercise', (req,res))


app.listen(3000, function() {
    console.log("listening on PORT 3000")
})

