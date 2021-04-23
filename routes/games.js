const expresss = require('express');
const router = expresss.Router();
const Game = require('../models/game');


router.post('/newGame', (req,res,next) => {
    let newGame = new Game({
    hostName: req.body.hostName,
    displayName: req.body.displayName,
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
    if (roomPin) {
        Game.getGameByPin(roomPin, (err,game) => {
            if (err) { throw err; }
            return res.json({success: true, game: {roomPin: game.roomPin, hostName: game.hostName, displayName: game.displayName}});
        });
    } else {
        return res.json({success: false, msg: 'No Room Pin Given'});
    }
});

router.post('/endGame',(req,res,next) => {
    const roomPin = req.body.roomPin;
        Game.deleteGame(roomPin, (err,game) => {
            if (err) { throw err; }
            return res.json({success: true, msg: 'Game deleted'});
        });
});

router.post('/createQuestions',(req,res,next) => {
    const game = req.body;
    console.log('GS', game)
        Game.createQuestions(game, (err,game) => {
            if (err) { throw err; }
            return res.json({success: true, msg: 'Questions Created'});
        });
});

router.post('/getQuestions',(req,res,next) => {
    const game = req.body;
    console.log('GS', game)
        Game.getGameByPin(game.roomPin, (err,game) => {
            console.log('Game', game);
            if (err) { throw err; }
            return res.json({success: true, msg: 'Questions Created', questions: game.questions});
        });
});

router.post('/setPlayers',(req,res,next) => {
    const game = req.body;
    console.log('SP', game)
        Game.setPlayers(game, (err,game) => {
            if (err) { throw err; }
            return res.json({success: true, msg: 'Players Set'});
        });
});

router.post('/getPlayers',(req,res,next) => {
    const game = req.body;
    console.log('GP', game)
        Game.getGameByPin(game.roomPin, (err,game) => {
            console.log('GP game', game);
            console.log('GP game players', game.players);
            if (err) { throw err; }
            return res.json({success: true, msg: 'Got Players', players: game.players});
        });
});
module.exports = router;