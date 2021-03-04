import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SocketioService } from '../../services/socketio.service';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  // @Input('childToMaster')
  // get participantArray(): any { return this._participantArray; }
  // set participantArray(participantArray: any) {
  //   this._participantArray = (participantArray  || '<no participantArray set>');
  // }
  // private _participantArray = '';

  api: any;
  toastMessage: any;
  // socket!: Socket;
  roomPin: any;
  url: any;
  game: any;
  participantArray: any;
  objectKeys = Object.keys;
  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

  
  
  ngOnInit(): void {
    // this.url = window.location.href;
    // this.roomPin = this.actRoute.snapshot.params.pin;
    // // setTimeout(()=>{}, 3000);
    // this.socketioService.connect(this.roomPin);
    // this.receiveJoinedPlayers();
    // this.receiveParticipants() 
    this.game
    // this.receiveStartGame();
    // this.receiveGameUpdate();
    this.game = {
      hostName: String,
      roomPin: this.roomPin,
      displayName: String
    }
    // console.log(this.api);
  }

  ngAfterViewInit(){
    // this.receiveJoinedPlayers();
  }

  // receiveJoinedPlayers() {
  //   this.socketioService.receiveJoinedPlayers().subscribe((message) => {
  //     // this.snackbar.open(message, '', {
  //     //   duration: 3000,
  //     // });
  //     this.toastMessage = message
  //     console.log(message);
  //   });
  // }

  // receiveParticipants() {
  // //  this.participantArray =  this.gameCreationService.getParticipants();
  //  this.participantArray = this.gameCreationService.getParticipants().subscribe((array: any) => {
  //     // this.participantArray = array;
  //     console.log(array);
  //   });
    
  //   console.log(this.participantArray);
  // }

  // beginGame(){
  //   // this.api.addListener('participantJoined', () => {
  //   //   this.participantArray = this.api._participants;
  //     // console.log(this.participantArray);
  //   //  });
  //   this.participantArray = this.gameCreationService.getParticipants();
  //   console.log(   this.participantArray);
  //   // this.gameCreat

  // }

  // receiveStartGame() {
  //   this.socketIoService.receiveStartGame().subscribe((words) => {
  //     this.role = 'operative';
  //     this.words = words;
  //   });
  // }

  // receiveGameUpdate() {
  //   this.socketIoService.receiveGameUpdate(this.gameId).subscribe((words) => {
  //     this.words = words;
  //   });
  // }

}
