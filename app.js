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

const server = app.listen(port, '0.0.0.0', () => {
    console.log('Server started on Port ' + port);
});

const io = require('socket.io')(server, {
        cors: true,
        origins: ["*"]
    });

// global vars for users who connect "late"
previousJoinedPlayers =  {};
gameBegan = {};
previousHostDetails = {};

io.on("connection", (socket) => {
    console.log(socket.id, "a user connected");
    socket.on('joinGame', ({gameId, playerData}) => {

        socket.join(gameId);
        if (previousJoinedPlayers === {} || previousJoinedPlayers[gameId] === undefined) {
            previousJoinedPlayers[gameId] = {};
        }
        playerData.socketID = socket.id
        previousJoinedPlayers[gameId][playerData.id] = playerData;
        socket.emit('getPreviousJoinedPlayers', previousJoinedPlayers[gameId]);
        socket.emit('checkGameBegan', gameBegan[gameId]);
        if (gameBegan[gameId]) {
            socket.emit('getHostDetails', previousHostDetails[gameId]);
            io.to(gameId).emit('startGame', previousJoinedPlayers[gameId]);
        }
        io.to(gameId).emit('joinGame', playerData);
    });

    socket.on('playerReady', ({ gameId, playerData }) => { 
    // overwrites with new fields e.g. id
    previousJoinedPlayers[gameId][playerData.id] = playerData
    previousJoinedPlayers[gameId][playerData.id].ready = true
        io.to(gameId).emit('playerReady',  playerData);
    })

    socket.on('startGame', ({gameId, playerData, hostDetails}) => {
        gameBegan[gameId] = true;
        previousHostDetails[gameId] = hostDetails;
        previousJoinedPlayers[gameId] = playerData
        io.to(gameId).emit('startGame', playerData);
        io.to(gameId).emit('getHostDetails', previousHostDetails[gameId])
        console.log('Game began' + gameId);
    })

    socket.on('endGame', ({gameId}) => {
        socket.to(gameId).emit('endGame', socket.id + 'ended the game');
        delete gameBegan[gameId];
        delete previousJoinedPlayers[gameId];
        socket.leave(gameId);
        socket.disconnect(true);
        console.log('Game ended' + gameId);
    });

    socket.on('playerLeft', ({gameId, playerData}) => {
        delete previousJoinedPlayers[gameId][playerData.id];
    });

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
// app.listen(port, '0.0.0.0', () => {
//     console.log('Server started on Port ' + port);
// });