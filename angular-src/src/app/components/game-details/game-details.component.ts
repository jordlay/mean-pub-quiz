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
  @Input() readyPlayers: any;
  @Input() hostDetails: any;
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
  host: any;
  objectKeys = Object.keys;
  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

  
  
  ngOnInit(): void {
    console.log('in GD');
    // this.receiveJoinedPlayers();
    console.log('PD', this.readyPlayers);
    console.log('HD', this.hostDetails);
    this.receiveBeginGame();
  }

  ngAfterViewInit(){

    
    console.log(this.hostDetails);
     
    
    // this.socketioService.receiveHostDetails().subscribe((details:any)=> {
    //   console.log(details);
    //   // this.host = details;
    // });
    // console.log(this.host);
    // console.log(this.participantArray);
    // this.receiveJoinedPlayers();
  }

  receiveBeginGame(){
    this.socketioService.receiveBeginGame().subscribe((message: any) => {
      console.log(message)
        // this.readyPlayers = message;
    });
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



}
