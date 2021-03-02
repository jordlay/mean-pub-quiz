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

  constructor() { }

  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('joinGame', {gameId : roomPin});
  }

  endGame(roomPin: any){
    this.socket.emit('endGame', {gameId : roomPin});
  }

  // startGame(gameId) {
  //   this.socket.emit('startGame', { gameId: gameId });
  // }
  receiveJoinedPlayers() {
    return new Observable((observer) => {
      this.socket.on('joinGame', (message: any) => {
        observer.next(message);
      });
    });
  }

  // sendGameUpdate(gameId, words) {
  //   this.socket.emit('gameUpdate', { gameId: gameId, words: words });
  // }

  // receiveJoinedPlayers() {
  //   return new Observable((observer) => {
  //     this.socket.on('joinGame', (message) => {
  //       observer.next(message);
  //     });
  //   });
  // }

  // receiveStartGame() {
  //   return new Observable((observer) => {
  //     this.socket.on('startGame', (words) => {
  //       observer.next(words);
  //     });
  //   });
  // }

  // receiveGameUpdate(gameId) {
  //   return new Observable((observer) => {
  //     this.socket.on(gameId, (words) => {
  //       observer.next(words);
  //     });
  //   });
  // }
}
