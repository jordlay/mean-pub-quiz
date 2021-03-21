import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket!: Socket;
  socketID: any;
  previousPlayers: any;
  gameBegan: any;
  hostDetails: any;
  roomPin:any;
  constructor() { }
  getSocket(){
    return this.socket; 
  }
  getRoomPin(){
    return this.roomPin;
  }
  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.roomPin = roomPin;
  }

  joinGame(roomPin:any, playerData: any){
    this.socket.emit('joinGame', {gameId: roomPin, playerData: playerData });
  }

  playerReady(roomPin:any, playerData: any){
    this.socket.emit('playerReady', {gameId: roomPin, playerData: playerData });
  }

  beginGame(roomPin: any, playerData:any, hostDetails:any) {
    this.socket.emit('startGame', {gameId: roomPin, playerData: playerData, hostDetails: hostDetails });
  }

  startRound(roomPin:any, round:any){
    this.socket.emit('startRound', {gameId: roomPin, round:round});
  }
  nextRound(roomPin:any){
    this.socket.emit('nextRound', {gameId: roomPin});
  }
  nextQuestion(roomPin: any, questionNumber: any) {
    this.socket.emit('nextQuestion', {gameId: roomPin, questionNumber: questionNumber});
  }
  showAnswers(roomPin:any, which:any){
    this.socket.emit('showAnswers', {gameId: roomPin, which: which});
  }
  endGamePlay(roomPin:any){
    this.socket.emit('endGamePlay', {gameId: roomPin});
  }
  playerLeft(roomPin: any, playerData: any){
    this.socket.emit('playerLeft', {gameId: roomPin, playerData: playerData });
  }
  reset(roomPin:any){
    this.socket.emit('reset', {gameId: roomPin});
  }
  endGame(roomPin: any){
    this.socket.emit('endGame', {gameId : roomPin});
  }

  setNewHostDetails(roomPin:any, hostDetails:any){
    this.socket.emit('setNewHostDetails', {gameId : roomPin, hostDetails: hostDetails});
  }

  setGameSettings(roomPin:any, buzzer:any, timer:any, timerLength:any){
    // emits boolean,boolean, number
    this.socket.emit('setGameSettings', {gameId : roomPin, buzzer: buzzer, timer:timer, timerLength:timerLength})
  }
  buzzerPressed(roomPin:any, playerName:any, playerColour:any){
    this.socket.emit('buzzerPressed', {gameId: roomPin, playerName: playerName, playerColour:playerColour });
  }
  claimHost(roomPin:any){
    this.socket.emit('claimHost', {gameId: roomPin });
  }
  startTimer(roomPin:any, startBool:any){
    this.socket.emit('startTimer', {gameId: roomPin, startBool: startBool });
  }

  getPreviousJoinedPlayers(){
    this.socket.on('getPreviousJoinedPlayers', (players: any) => {
      this.previousPlayers = players;
      return this.previousPlayers
    });
    return this.previousPlayers
  }

  checkGameBegan(){
    this.socket.on('checkGameBegan', (game:any) => {
      this.gameBegan = game;
      return this.gameBegan;
    });
    return this.gameBegan
  }

  receiveHostDetails(){
    return new Observable((observer) => {
      this.socket.on('getHostDetails', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveTeams(){
    return new Observable((observer) => {
      this.socket.on('getTeams', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveJoinedPlayers() {
    return new Observable((observer) => {
      this.socket.on('joinGame', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveReadyPlayers() {
    return new Observable((observer) => {
      this.socket.on('playerReady', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveBeginGame() {
    return new Observable((observer) => {
      this.socket.on('startGame', (message: any) => {
        observer.next(message);
      });
    });
  }
  receiveGameSettings() {
    return new Observable((observer) => {
      this.socket.on('setGameSettings', (message: any) => {
        console.log(message);
        observer.next(message);
      });
    });
  }
  receiveNextQuestion() {
    return new Observable((observer) => {
      this.socket.on('nextQuestion', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveStartRound() {
    return new Observable((observer) => {
      this.socket.on('startRound', (message: any) => {
        console.log('STARTROUND', message);
        observer.next(message);
      });
    });
  }

  receiveNextRound() {
    return new Observable((observer) => {
      this.socket.on('nextRound', (message: any) => {
        observer.next(message);
      });
    });
  }
  receiveGameBegun() {
    return new Observable((observer) => {
      this.socket.on('checkGameBegan', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveEndGame() {
    return new Observable((observer) => {
      this.socket.on('endGame', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveReset() {
    return new Observable((observer) => {
      this.socket.on('reset', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveClaimHost() {
    return new Observable((observer) => {
      this.socket.on('claimHost', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveBuzzerPressed() {
    return new Observable((observer) => {
      this.socket.on('buzzerPressed', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveShowAnswers(){
    return new Observable((observer) => {
      this.socket.on('showAnswers', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveEndGamePlay(){
    return new Observable((observer) => {
      this.socket.on('endGamePlay', (message: any) => {
        observer.next(message);
      });
    });
  }

  receiveStartTimer(){
    return new Observable((observer) => {
      this.socket.on('startTimer', (message: any) => {
        console.log(message);
        observer.next(message);
      });
    });
  }

}
