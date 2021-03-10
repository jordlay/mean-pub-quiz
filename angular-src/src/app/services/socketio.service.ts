import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
// import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket!: Socket;
  socketID: any;
  previousReadyPlayers: any;
  constructor() { }

  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('joinGame', {gameId : roomPin});
  }

  playerReady(roomPin:any, playerData: any){
    this.socket.emit('playerReady', {gameId: roomPin, playerData: playerData });
  }

  // NOT WORKING
  beginGame(roomPin: any, playerData:any) {
    console.log('SS BG', playerData);
    this.socket.emit('startGame', {gameId: roomPin, playerData: playerData });
  }

  endGame(roomPin: any){
    this.socket.emit('endGame', {gameId : roomPin});
  }

  getPreviousReadyPlayers(){
    this.socket.on('getPreviousReadyPlayers', (readyPlayers: any) => {
      this.previousReadyPlayers = readyPlayers;
      return this.previousReadyPlayers
    });
    return this.previousReadyPlayers
  }

  getID(){
    this.socket.on('getID', (ID: any) => {
      this.socketID = ID;
      console.log(ID);
      console.log(this.socketID);
      return this.socketID
    });
    return this.socketID
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
    console.log('o insocketio');
    return new Observable((observer) => {
      console.log('m insocketio');
      this.socket.on('startGame', (message: any) => {
        console.log('i insocketio');
        console.log(message);
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
  // sendGameUpdate(gameId, words) {
  //   this.socket.emit('gameUpdate', { gameId: gameId, words: words });
  // }



}
