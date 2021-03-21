import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SocketioService } from '../services/socketio.service';

@Injectable({
  providedIn: 'root'
})
export class ChatSocketIOService {

  constructor(private socketioService:SocketioService) {   }

  socket!: Socket;
  socketID: any;
  roomPin:any;
  // previousPlayers: any;
  // gameBegan: any;
  // hostDetails: any;

  ngOnInit(){
    this.socket = this.socketioService.getSocket();
    this.roomPin = this.socketioService.getRoomPin();
    // this.receiveChatMessage();
    console.log(this.socket);
  }

  chatMessage(roomPin:any, message:any, player:any){
    this.socket.emit('chatMessage', {gameId:roomPin, message:message, player:player});
  }

  receiveChatMessage(){
    return new Observable((observer) => {
      this.socket.on('chatMessage', (message: any) => {
        console.log(message);
        observer.next(message);
      });
    });
  }
}
