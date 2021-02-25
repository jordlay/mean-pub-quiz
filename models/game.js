const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var crypto = require("crypto");


const GameSchema = mongoose.Schema( {
    hostName: {type: String},
    roomPin: {
        type: String,
        required: true},
    password: {type: String},
    });
    
    const Game = module.exports = mongoose.model('Game', GameSchema);
        
    module.exports.addGame = function(newGame, callback){
        // create pin here
        newPin = crypto.randomBytes(6).toString('hex');
        console.log('game.js', newPin);
        // if (err) { throw err} ;
        newGame.roomPin = newPin;
        newGame.save(callback);
        
    }