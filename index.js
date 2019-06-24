const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
//require('dotenv'}.config();

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`now listening at port ${port}`)
})

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));