const expresss = require('express');
const router = expresss.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const config = require('../config/database')
const Game = require('../models/game');


router.post('/newGame', (req,res,next) => {
    // const newGame = req.body;
    let newGame = new Game({
    hostName: req.body.hostName,
    roomPin: req.body.roomPin
    });
    console.log('games.js', newGame);
    Game.addGame(newGame, (err,game) => {
    if (err) {
        res.json({success: false, msg: 'Failed to Add Game'});  
    } else {
        res.json({success: true, msg: 'Game Added'})
    }
    });

});
module.exports = router;