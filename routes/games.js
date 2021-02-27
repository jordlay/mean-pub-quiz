const expresss = require('express');
const router = expresss.Router();
const Game = require('../models/game');


router.post('/newGame', (req,res,next) => {
    let newGame = new Game({
    hostName: req.body.hostName,
    roomPin: req.body.roomPin
    });
    Game.addGame(newGame, (err,game) => {
    if (err) {
        res.json({success: false, msg: 'Failed to Add Game'});  
    } else {
        res.json({success: true, msg: 'Game Added'})
    }
    });

});

router.post('/checkGame',(req,res,next) => {
    const roomPin = req.body.roomPin;
    Game.getGameByPin(roomPin, (err,game) => {
        if (err) { throw err; }
        if (!game) {
            return res.json({game: req.body, game: req.body, success: false, msg: 'User with that email not found'});
        } else {
            return res.json({game: req.body, roomPin: roomPin, success: true, msg: 'User with that email exists'});
        }
    });
});

router.post('/joinGame',(req,res,next) => {
    const roomPin = req.body.roomPin;
    console.log(req);
    console.log(roomPin)
    if (roomPin) {
        Game.getGameByPin(roomPin, (err,game) => {
            if (err) { throw err; }
            return res.json({success: true, game: {roomPin: game.roomPin, hostName: game.hostName}});
        });
    } else {
        return res.json({success: false, msg: 'No Room Pin Given'});
    }

});

module.exports = router;