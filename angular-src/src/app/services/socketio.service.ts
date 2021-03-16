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

  constructor() { }

  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
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

  playerLeft(roomPin: any, playerData: any){
    this.socket.emit('playerLeft', {gameId: roomPin, playerData: playerData });
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
        console.log(message);
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

  receiveBuzzerPressed() {
    return new Observable((observer) => {
      this.socket.on('buzzerPressed', (message: any) => {
        console.log(message);
        observer.next(message);
      });
    });
  }
}
