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

let port = process.env.PORT || 8080;
// let porthttp = process.env.PORT || 3000;

const server = app.listen(port, '0.0.0.0', () => {
    console.log('Server started on Port ' + port);
});

const io = require('socket.io')(server, {
        cors: true,
        origins: ["*"]
    });

// const httpServer = require('http').createServer(httpApp);
// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer, {

// });
// const io = require('socket.io')(httpServer, {
//     cors: true,
//     origins: ["*"]
// });

// const io = require("socket.io-client");
previousReadyPlayers = {};
io.on("connection", (socket) => {
    console.log(socket.id, "a user connected");
    socket.emit('getID', socket.id);
    socket.emit('getPreviousReadyPlayers', previousReadyPlayers);
    
    socket.on('joinGame', ({gameId}) => {
        socket.join(gameId);
        console.log( socket.id + 'joined room' + gameId);
        io.to(gameId).emit('joinGame', socket.id);
    });

    socket.on('playerReady', ({ gameId, playerData }) => { 
    // previousReadyPlayers[playerData.participantID].socketID = socket.id       
    previousReadyPlayers[playerData.participantID] = playerData
        console.log(previousReadyPlayers);
        console.log( socket.id + ' is ready to play ' + gameId);
        console.log(gameId, playerData);
        this.playerData = playerData
        io.to(gameId).emit('playerReady',  playerData);
    })

    socket.on('startGame', ({gameId, playerData}) => {
        console.log('PD');
        console.log(playerData);
        io.to(gameId).emit('startGame', playerData);
            console.log('game began' + gameId);
            console.log(playerData);
    })

    socket.on('endGame', ({gameId}) => {
        // NOTE: tidy this up, work out which acc ends connection
        socket.to(gameId).emit('endGame', socket.id + 'player ${socket.id} ended the game');
        socket.leave(gameId);
        console.log('game ended' + gameId);
        socket.disconnect(true);
    });
});





// httpServer.listen(porthttp, '0.0.0.0', () => {
//     console.log('Server started on Port ' + porthttp);
// });

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
// app.listen(port, '0.0.0.0', () => {
//     console.log('Server started on Port ' + port);
// });