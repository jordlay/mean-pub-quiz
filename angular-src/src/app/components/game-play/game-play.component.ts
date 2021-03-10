import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '../../../vendor/jitsi/external_api.js';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { SocketioService } from '../../services/socketio.service';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  constructor(private gameCreationService: GameCreationService, 
    private router: Router, private actRoute: ActivatedRoute, private socketioService: SocketioService) { }
 
  @ViewChild('meet') meet: ElementRef | any;
  objectKeys = Object.keys;
  game: any;
  data: any;
  api: any;
  gameStarted = false;
  roomPin: any;
  options: any;
  domain = 'meet.jit.si';
  hostname: any;
  errorMessage: any;
  isHost = false;
  url = '';
  allPlayersReady = false;
  isPlayerReady = false;
  readyPlayers: any;
  participantArray: any;
  currentSocketID: any;
  currentPlayer: any;
  previousReadyPlayers: any;

  ngOnInit(): void {
    this.url = window.location.href;
    this.roomPin = this.actRoute.snapshot.params.pin;
    this.game = {
      hostName: String,
      roomPin: this.roomPin,
      displayName: String
    }
  }

  ngAfterViewInit() {
    this.gameCreationService.checkGameExists(this.game).subscribe((data) => {
      if ((data as any).success) {
    this.socketioService.connect(this.roomPin);
    this.receiveReadyPlayers();
    this.receiveBeginGame();
    this.receiveEndGame();
    this.previousReadyPlayers = this.socketioService.getPreviousReadyPlayers();

    this.gameStarted = false;
    this.gameCreationService.getMeetingParams(this.roomPin).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        this.game = this.data.game;
        
        let displayName = this.gameCreationService.getDisplayName();
        let HostBool = this.gameCreationService.getHostBoolean();

        if (displayName === undefined) {
          this.isHost = true;
          this.options = { 
            roomName: this.game.roomPin + 'JordansQuiz',  
            configOverwrite: { startWithAudioMuted: true },
            width: '100%', 
            height: 500, 
            parentNode: this.meet.nativeElement,
            userInfo: {
              displayName: this.game.displayName
            }
          }
        } else {
        this.options = { 
            roomName: this.game.roomPin + 'JordansQuiz',  
            configOverwrite: { startWithAudioMuted: true },
            width: '100%', 
            height: 500, 
            parentNode: this.meet.nativeElement,
              userInfo: {
              displayName: displayName
            }
          }
        } 

        this.api = new JitsiMeetExternalAPI(this.domain, this.options);
      
        this.api.addListener('videoConferenceJoined', (message:any)=>{
          this.allPlayersReady = false;
          this.currentPlayer = message;
          this.participantArray = this.api._participants;
          
          this.previousReadyPlayers = this.socketioService.getPreviousReadyPlayers();
          let participantHistoryArray = this.previousReadyPlayers;  

          if (this.readyPlayers === undefined) {
            this.readyPlayers = {};
          }
          
          // Colour previous ready participants green when new user joins
          if (!(participantHistoryArray === undefined)) {
            for (let key of this.objectKeys(participantHistoryArray)) {
              this.readyPlayers[participantHistoryArray[key].participantID] = participantHistoryArray[key];
              if (!(this.readyPlayers[key] === undefined) && !(this.participantArray[key] === undefined)) {
                if (key === this.readyPlayers[key].participantID) {
                  this.participantArray[key].ready = true; 
                } 
              }
            }
          }
        
        });

      } else {
        this.errorMessage = "You must create or enter a pin";
      }
    });

      } else {
        this.router.navigate(['/']);
      }
    });
  }

  endGame(){
    this.api.dispose();
    this.socketioService.endGame(this.roomPin);
    this.router.navigate(['/']);
    this.gameCreationService.endGame(this.game).subscribe( () => {});
  }

  beginGame(){
    this.socketioService.beginGame(this.roomPin, this.readyPlayers);
    this.gameStarted = true;
  }

  playerReady(){
    this.isPlayerReady = true;
    this.currentSocketID = this.socketioService.getID();
    console.log(this.currentSocketID);
    this.participantArray[this.currentPlayer.id].socketID = this.currentSocketID;
    this.participantArray[this.currentPlayer.id].participantID = this.currentPlayer.id;
    this.participantArray[this.currentPlayer.id].ready = true;

    let currentPlayerDetails = this.participantArray[this.currentPlayer.id];
    this.socketioService.playerReady(this.roomPin, currentPlayerDetails);
  }


  // //remove?
  // receiveJoinedPlayers() {
  //   this.socketioService.receiveJoinedPlayers().subscribe((message:any) => {
  //     // this.snackbar.open(message, '', {
  //     //   duration: 3000,
  //     // });
  //     this.toastMessage = message
  //     console.log(message);
  //     this.playerID.push(message);
  //     // this.playerID.push(message);
  //   });
  // }

  receiveReadyPlayers(){
    this.socketioService.receiveReadyPlayers().subscribe((message:any)=> {
      let partArray = message;
      console.log(this.readyPlayers);
      if (this.readyPlayers === undefined) {
        this.readyPlayers = {};
      }
      console.log(this.readyPlayers);
      this.readyPlayers[partArray.participantID] = message;
      for (let key of this.objectKeys(this.participantArray)) {
        if (!(this.readyPlayers[key] === undefined)) {
          if (key === this.readyPlayers[key].participantID) {
            this.participantArray[key].ready = true; 
          } 
        }
      }
      
      console.log(this.participantArray);
      console.log(this.readyPlayers);

      console.log(this.objectKeys(this.participantArray).length);
      console.log(this.objectKeys(this.readyPlayers).length);

      if ((this.objectKeys(this.participantArray).length) === (this.objectKeys(this.readyPlayers).length)) {
        this.allPlayersReady = true;
      } else {
        this.allPlayersReady = false;
      }
    });

  }

  receiveEndGame() {
    this.socketioService.receiveEndGame().subscribe((message: any) => {
      console.log(message)
      if (message.includes('ended the game')) {
        this.endGame();
      }
    });
  }

  receiveBeginGame() {
    this.socketioService.receiveBeginGame().subscribe((message: any) => {
      console.log(message)
        this.gameStarted = true;
    });
  }
}
