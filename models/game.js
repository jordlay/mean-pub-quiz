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
    questions: {type: Object},
    players: {type: Object}
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

    module.exports.createQuestions = function(game,callback){
        const query = {roomPin : game.roomPin};
        const newQuestions = { $set: {questions: game.questions}}
        Game.updateOne(query, newQuestions, callback);
    }

    module.exports.setPlayers = function(game,callback){
        const query = {roomPin : game.roomPin};
        const newPlayers = { $set: {players: game.players}}
        Game.updateOne(query, newPlayers, callback);
    }
