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

previousReadyPlayers = {};
// previousJoinedPlayers = {};
previousJoinedPlayers =  {};
gameBegan = {};
previousHostDetails = {};
gameIDArray = [];
io.on("connection", (socket) => {
    console.log(socket.id, "a user connected");
    socket.on('joinGame', ({gameId, playerData}) => {
        if (previousJoinedPlayers === {} || previousJoinedPlayers[gameId] === undefined) {
            previousJoinedPlayers[gameId] = {};
        }
        gameIDArray.push(gameId);
        socket.join(gameId);
        console.log( socket.id + ' joined room ' + gameId);
        playerData.socketID = socket.id
        // if (previousJoinedPlayers[gameId][playerData.id] === undefined) {
            
        // }
            console.log('PJG', previousJoinedPlayers);
            console.log('PD', playerData)
            // previousJoinedPlayers[gameId][playerData.id] = {};
            previousJoinedPlayers[gameId][playerData.id] = playerData;
            console.log('PJGPD', previousJoinedPlayers);
       
        //NOTE: shouldnt need this if line 34?
        // previousJoinedPlayers[playerData.id].socketID = socket.id
        // this would not have ids?
        socket.emit('getPreviousJoinedPlayers', previousJoinedPlayers[gameId]);
        socket.emit('checkGameBegan', gameBegan[gameId]);
        console.log(gameBegan[gameId])
        console.log( previousHostDetails[gameId]);
        if (gameBegan[gameId]) {
            socket.emit('getHostDetails', previousHostDetails[gameId]);
            io.to(gameId).emit('startGame', previousJoinedPlayers[gameId]);
        }
        io.to(gameId).emit('joinGame', playerData);
    });

    socket.on('playerReady', ({ gameId, playerData }) => { 
    // so that it overwrites with new fields eg id
    previousJoinedPlayers[gameId][playerData.id] = playerData
    previousJoinedPlayers[gameId][playerData.id].ready = true
        console.log( socket.id + ' is ready to play ' + gameId);
        io.to(gameId).emit('playerReady',  playerData);
    })

    socket.on('startGame', ({gameId, playerData, hostDetails}) => {
        gameBegan[gameId] = true;
        previousHostDetails[gameId] = hostDetails;
        console.log('PD', playerData);
        previousJoinedPlayers[gameId] = playerData
        console.log('PJP', previousJoinedPlayers[gameId]);
        console.log('PHD', previousHostDetails[gameId])
        io.to(gameId).emit('startGame', playerData);
        io.to(gameId).emit('getHostDetails', previousHostDetails[gameId])
        console.log('Game began ' + gameId);
    })

    socket.on('endGame', ({gameId}) => {
        socket.to(gameId).emit('endGame', socket.id + 'player ${socket.id} ended the game');
        // delete gameBegan[gameId];
        socket.leave(gameId);
        console.log('Game ended ' + gameId);
        socket.disconnect(true);
        // TO DO: delete all Data Structures
    });

    socket.on('disconnect', () => {
        console.log('BPJP', previousJoinedPlayers);
        // for (let key of Object.keys(previousJoinedPlayers[gameId])) {
        //     if (previousJoinedPlayers[gameId][key].socketID === socket.id) {
        //         gameID = previousJoinedPlayers[gameId][key].roomName.substring(0,4);
        //         console.log(previousJoinedPlayers[gameId][key].socketID);
        //         console.log(previousJoinedPlayers[gameId][key]);
        //         delete previousJoinedPlayers[gameId][key];
        //     }
        // }
        // // console.log(previousJoinedPlayers[key]);
        // console.log('PJP', previousJoinedPlayers[gameId]);
        // io.to(gameID).emit('startGame', previousJoinedPlayers[gameId]);
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