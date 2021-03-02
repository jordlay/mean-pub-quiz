import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../../services/socketio.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  toastMessage: any;
  // socket!: Socket;
  roomPin: any;
  url: any;
  game: any;
  constructor(private socketioService: SocketioService, private router: Router, private actRoute: ActivatedRoute,) { }

  
  
  ngOnInit(): void {
    this.url = window.location.href;
    this.roomPin = this.actRoute.snapshot.params.pin;
    this.socketioService.connect(this.roomPin);
    this.recieveJoinedPlayers();
    // this.recieveStartGame();
    // this.recieveGameUpdate();
    this.game = {
      hostName: String,
      roomPin: this.roomPin,
      displayName: String
    }
  }

    // nextGame() {
  //   this.socketIoService.startGame(this.gameId);
  // }

  // startGame() {
  //   this.socketIoService.startGame(this.gameId);
  // }

  // clickWord(word) {
  //   word.selected = true;
  //   this.socketIoService.sendGameUpdate(this.gameId, this.words);
  // }

  recieveJoinedPlayers() {
    this.socketioService.recieveJoinedPlayers().subscribe((message) => {
      // this.snackbar.open(message, '', {
      //   duration: 3000,
      // });
      this.toastMessage = message
      console.log(message);
    });
  }

  // recieveStartGame() {
  //   this.socketIoService.recieveStartGame().subscribe((words) => {
  //     this.role = 'operative';
  //     this.words = words;
  //   });
  // }

  // recieveGameUpdate() {
  //   this.socketIoService.recieveGameUpdate(this.gameId).subscribe((words) => {
  //     this.words = words;
  //   });
  // }

}
