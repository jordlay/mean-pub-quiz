// import "bootswatch/dist/sketchy/bootstrap.min.css";
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to Database
mongoose.connect( config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} );
// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to DB ' + config.mongoURI)
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('DB Error ' + err)
});

const app = express();
const users = require('./routes/users');
const port = 8080 || process.env.port;

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

// Index Route (will go to index file)
app.get('/', (req,res) => {
    res.send('Invalid Endpoint')
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
// Start Server
app.listen(port, () => {
    console.log ('server started on port ' + port)
});