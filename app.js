const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

const app = express();
const users = require('./routes/users');

const games = require('./routes/games');
let port = process.env.PORT || 8080;

const uri = "mongodb+srv://jll541:mean-quiz@clusterquiz.inacn.mongodb.net/quizdb?retryWrites=true&w=majority";

// Connect to Database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} );
// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to DB ' + uri)
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('DB Error ' + err)
});


// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parse Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/games', games);

// Index Route (will go to index file)
app.get('/', (req,res) => {
    res.send('Invalid Endpoint')
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
// Start Server
app.listen(port, '0.0.0.0', () => {
    console.log('Server started on Port ' + port);
});