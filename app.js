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
history = {};
client = [];
io.on("connection", (socket) => {
    console.log(socket.id, "a user connected");
    client.push({id: socket.id})
    var getClientID = client.find(e => (e.id === socket.client.id))
    console.log("the Client", getClientID)
    if(getClientID){
     //io.sockets.emit("msg",history);
    
     socket.emit('getHistory', history);
    }
    socket.emit('getHistory', history);
    socket.emit('getID', socket.id);
    socket.on('joinGame', ({gameId}) => {
        socket.join(gameId);
        console.log( socket.id + 'joined room' + gameId);
        // socket.to(gameId).emit('joinGame', socket.id);
        io.to(gameId).emit('joinGame', socket.id);
    });
    
    // socket.join('here is unique idea for room');
    // socket.to["uniqueid"].emit('message','to everyone exvept sender');

    socket.on('startGame', ({gameId}) => {
            // io.to(gameId).emit('startGame', socket.id);
            
        io.to(gameId).emit('startGame', socket.id + 'player ${socket.id} began the game');
            // console.log(socket.id, "began the game");
            console.log('game began' + gameId);
    })

    socket.on('playerReady', ({ gameId, playerData }) => {    
    // let objectKeys = Object.keys;
    // objectKeys(history);
    
    history[playerData.participantID] = playerData
        // history.push(playerData)
        console.log(history);
        // io.to(gameId).emit(gameId);
        console.log( socket.id + ' is ready to play ' + gameId);
        console.log(gameId, playerData);
        this.playerData = playerData
        // socket.to(gameId).emit('joinGame', socket.id);
        // io.to(gameId).emit('playerReady', socket.id);
        io.to(gameId).emit('playerReady',  playerData);
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