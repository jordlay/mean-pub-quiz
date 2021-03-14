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
colours = ["Red", "Green", "Blue", "Orange", "Purple", "Pink", "Yellow", "Black", "Grey", "Brown"];
previousJoinedPlayers =  {};
gameBegan = {};
previousHostDetails = {};
teams = {};
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
        teams[gameId] = {}; 
        console.log(teams[gameId]);
        numberOfTeams = hostDetails.teamNumber;
        numberOfPlayers = Object.keys(previousJoinedPlayers[gameId]).length;
        console.log(numberOfTeams)
        // NOTE: why not nOT-1?
        let playerNames = [];
        for (let colour of colours.slice(0, numberOfTeams) ) {
            teams[gameId][colour] = [];
        }
        for (let key of Object.keys(previousJoinedPlayers[gameId])) {
            playerNames.push(previousJoinedPlayers[gameId][key].displayName);
            
        }
        console.log(playerNames);
        if (!hostDetails.include) {
            let index = playerNames.indexOf(hostDetails.displayName);
            playerNames.splice(index,1);
            numberOfPlayers -= 1;
        }
        console.log(playerNames);
        let i = 0;
        while (i !== numberOfPlayers) {
            let keys = Object.keys(teams[gameId]);
            for (let j = 0; j < keys.length; j++) {
                teams[gameId][keys[j]].push(playerNames[i]);
                i++
                if (i === numberOfPlayers) {
                    break;
                }
            }
            console.log(teams[gameId]);
        }
      
        console.log(teams[gameId]);
        console.log('Game began ' + gameId);
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