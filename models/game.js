const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
// var crypto = require("crypto");


const GameSchema = mongoose.Schema( {
    hostName: {type: String},
    displayName: {type: String},
    roomPin: {
        type: String,
        required: true},
    password: {type: String},
    });
    
    const Game = module.exports = mongoose.model('Game', GameSchema);
        
    module.exports.addGame = function(newGame, callback){
        newGame.save(callback);
    }

    module.exports.getGameByPin = function(roomPin, callback){
        const query = {roomPin: roomPin}
        Game.findOne(query, callback);
    }

    module.exports.deleteGame = function(roomPin,callback){
        const query = {roomPin : roomPin};
        Game.deleteOne(query, callback);
    }