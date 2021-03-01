const express = require('express');
const httpApp = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');
const games = require('./routes/games');

const httpServer = require('http').createServer(httpApp);
// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer, {

// });
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"]
});

// const io = require("socket.io-client");

io.on("connection", (socket) => {
    console.log("a user connected");
    // socket.emit('message', 'JUSTCOONECTED');
    // socket.broadcast.emit('message', 'all but atuhior');
    
    // socket.join('here is unique idea for room');
    // socket.to["uniqueid"].emit('message','to everyone exvept sender');

    socket.on('joinGame', ({gameId}) => {
        socket.join(gameId);
        console.log('player joined the rrom' + gameId);
        socket.to(gameId).emit('joinGame', 'player joined the game');
    });

});


let port = process.env.PORT || 8080;
let porthttp = process.env.PORT || 3000;

httpServer.listen(porthttp, '0.0.0.0', () => {
    console.log('Server started on Port ' + porthttp);
});

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