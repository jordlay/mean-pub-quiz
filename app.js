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
colours = ["Red", "Green", "Blue","Purple", "Pink", "Orange", "Yellow", "Grey", "Brown", "Black"];
previousJoinedPlayers =  {};
gameBegan = {};
previousHostDetails = {};
teams = {};
previousQuestionsObject = {}
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
            socket.emit('getTeams', teams[gameId])
            socket.emit('setGameSettings', settings[gameId])
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

    socket.on('setNewHostDetails', ({gameId, hostDetails}) => {
        previousHostDetails[gameId] = hostDetails;
        io.to(gameId).emit('getHostDetails', previousHostDetails[gameId])
    });

    socket.on('setGameSettings', ({gameId, buzzer, timer, timerLength, timerStart}) => {
        //store before emitting to all in case join late?
        console.log(buzzer,timer,timerLength,timerStart);
        settings = {}
        settings[gameId] = {}
        settings[gameId].buzzer = buzzer
        settings[gameId].timer = timer
        settings[gameId].timerLength = timerLength
        settings[gameId].timerStart = timerStart
        console.log(settings[gameId]);
        io.to(gameId).emit('setGameSettings', settings[gameId])
    });

    socket.on('startGame', ({gameId, playerData, hostDetails}) => {
        gameBegan[gameId] = true;
        previousHostDetails[gameId] = hostDetails;
        previousJoinedPlayers[gameId] = playerData
        // move this to end with added team colours
        // io.to(gameId).emit('startGame', playerData);
       
        io.to(gameId).emit('getHostDetails', previousHostDetails[gameId])
        teams[gameId] = {}; 
        numberOfTeams = hostDetails.teamNumber;
        numberOfPlayers = Object.keys(previousJoinedPlayers[gameId]).length;
        let playerNames = [];
        let playerid = [];
        for (let colour of colours.slice(0, numberOfTeams) ) {
            teams[gameId][colour] = {};
        }
        for (let key of Object.keys(previousJoinedPlayers[gameId])) {
            playerNames.push(previousJoinedPlayers[gameId][key].displayName);
            playerid.push(previousJoinedPlayers[gameId][key].id);
            
        }                                                                                                     
        if (!hostDetails.include) {
            let index = playerNames.indexOf(hostDetails.displayName);
            playerNames.splice(index,1);
            playerid.splice(index,1);
            numberOfPlayers -= 1;
        }
        let i = 0;
        while (i !== numberOfPlayers) {
            let keys = Object.keys(teams[gameId]);
            for (let j = 0; j < keys.length; j++) {
                //keys is colours
                teams[gameId][keys[j]][playerid[i]] = {}
                teams[gameId][keys[j]][playerid[i]].displayName = playerNames[i];
                teams[gameId][keys[j]][playerid[i]].id = playerid[i];
                previousJoinedPlayers[gameId][playerid[i]].colour = keys[j];
                console.log(previousJoinedPlayers[gameId][playerid[i]]);
                i++
                if (i === numberOfPlayers) {
                    break;
                }
            }
        }
        console.log(previousJoinedPlayers[gameId])
        io.to(gameId).emit('startGame', previousJoinedPlayers[gameId])
        io.to(gameId).emit('getTeams', teams[gameId])
        io.to(gameId).emit('setGameSettings', settings[gameId])
        console.log('GS in SG', settings[gameId]);
        console.log('Game began ' + gameId);
    })

    socket.on('endGame', ({gameId}) => {
        socket.to(gameId).emit('endGame', socket.id + 'ended the game');
        delete gameBegan[gameId];
        delete previousJoinedPlayers[gameId];
        socket.leave(gameId);
        socket.disconnect(true);
        console.log('Game ended ' + gameId);
    });

    socket.on('playerLeft', ({gameId, playerData}) => {
        delete previousJoinedPlayers[gameId][playerData.id];
    });

    socket.on('buzzerPressed', ({gameId, playerName, playerColour }) => {
        let buzzerDetail = {};
        buzzerDetail[gameId] = {};
        buzzerDetail[gameId].displayName = playerName;
        buzzerDetail[gameId].colour = playerColour;
        io.to(gameId).emit('buzzerPressed', buzzerDetail[gameId]);
    });

    socket.on('startRound', ({gameId, round}) => {
        console.log('ROUND', round)
        io.to(gameId).emit('startRound', round);
        // if (settings[gameId].timerStart) {
        //     io.to(gameId).emit('startTimer', true);
        // }
    });
    socket.on('nextQuestion', ({gameId, questionNumber}) => {
        io.to(gameId).emit('nextQuestion', questionNumber);
        // if (settings[gameId].timerStart) {
        //     io.to(gameId).emit('startTimer', true);
        // }
    });
    socket.on('nextRound', ({gameId}) => {
        io.to(gameId).emit('nextRound', gameId);
    });
    socket.on('endGamePlay', ({gameId}) => {
        io.to(gameId).emit('endGamePlay', gameId);
    });
    socket.on('reset', ({gameId, type}) => {
        io.to(gameId).emit('reset', type);
    });
    socket.on('showAnswers', ({gameId, which}) => {
        io.to(gameId).emit('showAnswers', which);
    });
    socket.on('claimHost', ({gameId}) => {
        io.to(gameId).emit('claimHost', gameId);
    });
    socket.on('startTimer', ({gameId, startBool}) => {
        console.log(startBool);
        io.to(gameId).emit('startTimer', startBool);
    });
    socket.on('chatMessage', ({gameId, message, player}) => {
        console.log(message);
        console.log(player);
        chatMessage = {}
        chatMessage[gameId] = {}
        chatMessage[gameId][player.colour] ={}
        chatMessage[gameId][player.colour] = player
        chatMessage[gameId][player.colour].message = message;
        console.log(chatMessage[gameId][player.colour]);
        socket.to(gameId).emit('chatMessage', chatMessage[gameId]);
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