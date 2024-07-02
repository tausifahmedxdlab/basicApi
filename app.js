require('dotenv').config();
const express = require('express');
const router = require('./route/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

console.log(URI);
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB server");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/api/', router);


app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is Running at : localhot:${PORT}`);
    else
        console.log("Error occurred, server can't start", error);
});
