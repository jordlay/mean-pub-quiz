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
  constructor() { }

  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('joinGame', {gameId : roomPin});
  }

  playerReady(roomPin:any){
    this.socket.emit('playerReady', {gameId: roomPin});
  }

  // NOT WORKING
  beginGame(roomPin: any) {
    this.socket.emit('startGame', {gameId: roomPin});
  }

  endGame(roomPin: any){
    this.socket.emit('endGame', {gameId : roomPin});
  }

  getID(){
    this.socket.on('getID', (ID: any) => {
      this.socketID = ID;
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
    return new Observable((observer) => {
      this.socket.on('startGame', (message: any) => {
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
