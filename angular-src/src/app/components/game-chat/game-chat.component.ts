import { Component, Input, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/services/socketio.service';
import { ChatSocketIOService } from '../../services/chat-socket-io.service';
@Component({
  selector: 'app-game-chat',
  templateUrl: './game-chat.component.html',
  styleUrls: ['./game-chat.component.css']
})
export class GameChatComponent implements OnInit {

  constructor(private chatSocketIOService:ChatSocketIOService, private socketioService:SocketioService) { }
  @Input() player:any;
  roomPin:any;
  messages:any;
  personalMessages:any;
  // colour:any
  ngOnInit(): void {
    
    this.chatSocketIOService.ngOnInit();
    this.roomPin = this.socketioService.getRoomPin();
    this.receiveChatMessage();
    this.messages = document.getElementById('messages');
    this.personalMessages = document.getElementById('personalMessages');

  }

  sendMessage(){
    let messageElement = <HTMLInputElement> document.getElementById('messageInput');
    console.log(messageElement.value);
    if (messageElement.value) {
      this.chatSocketIOService.chatMessage(this.roomPin, messageElement.value, this.player);

      // var item = document.createElement('li');
      // item.textContent = messageElement.value;
      // item.style.float ="right";
      // this.personalMessages.appendChild(item);
      // window.scrollTo(0, document.body.scrollHeight);
      // messageElement.value = '';
      let item = document.createElement('div');
      var innerItem = document.createElement('span');
      innerItem.textContent = messageElement.value;
      innerItem.style.clear = "both"
      innerItem.style.float ="right";
      innerItem.className = "card border-secondary mb-3"
      innerItem.style.maxWidth = '50%';
      item.appendChild(innerItem);
      this.messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
      messageElement.value = '';
    }
  }

  receiveChatMessage(){
    this.chatSocketIOService.receiveChatMessage().subscribe( (data:any) => {
      console.log(data)
      console.log(Object.keys(data));
      console.log(data[this.player.colour]);
      if ((Object.keys(data))[0] === this.player.colour) {
        var item = document.createElement('div');
        // item.style.maxWidth = '50%';
        var innerItem = document.createElement('span');
        var innerItem2 = document.createElement('span');
        innerItem.textContent = data[this.player.colour].message;
        innerItem.style.clear = "both"
        innerItem.style.float ="left";
        innerItem.style.marginBottom ="0px !important";
        innerItem.className = "card border-secondary mb-3"
        innerItem.style.maxWidth = '50%';

        innerItem2.textContent = data[this.player.colour].displayName;
        innerItem2.style.clear = "both"
        innerItem2.style.float ="left";
        innerItem2.style.maxWidth = '50%';
        item.appendChild(innerItem);
        item.appendChild(innerItem2);
        this.messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      }
 
    });
  }
}
