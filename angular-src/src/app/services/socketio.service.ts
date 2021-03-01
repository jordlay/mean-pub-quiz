import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
// import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: Socket | undefined;

  constructor() { }

  connect(roomPin: any){
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('joinGame', {gameId : roomPin});
  }

}
