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
  previousPlayers: any;

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
    this.receiveJoinedPlayers();
    this.receiveReadyPlayers();
    this.receiveBeginGame();
    this.receiveEndGame();
    this.previousReadyPlayers = this.socketioService.getPreviousReadyPlayers();
    this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
 
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
          this.currentPlayer.ready = false;

          this.socketioService.joinGame(this.roomPin, this.currentPlayer);
          this.participantArray[this.currentPlayer.id].id = this.currentPlayer.id;
          this.participantArray[this.currentPlayer.id].ready = false;
          setTimeout(()=>{
            this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
            console.log(this.previousPlayers);
            let previousPlayersArray = this.previousPlayers;
         
            if (!(this.previousPlayers === undefined)) {
              for (let key of this.objectKeys(this.previousPlayers)) {
                if (this.previousPlayers[key].ready === true && !(this.participantArray[key]===undefined)) {
                  // this.readyPlayers[previousPlayersArray[key].id] = previousPlayersArray[key];
                  //maybe remove?
                  this.participantArray[key].ready = true;
                  this.participantArray[key].socketID = this.previousPlayers[key].socketID
                  console.log('PA', this.participantArray);
                  // console.log('RP', this.readyPlayers);
                }
                
              }
            }
          }, 3000);
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
    this.socketioService.beginGame(this.roomPin, this.participantArray);
    this.gameStarted = true;
  }

  playerReady(){
    this.isPlayerReady = true;
    // this.currentSocketID = this.socketioService.getID();
    // console.log(this.currentSocketID);
    // this.participantArray[this.currentPlayer.id].socketID = this.currentSocketID;
    // this.participantArray[this.currentPlayer.id].id = this.currentPlayer.id;
    this.participantArray[this.currentPlayer.id].ready = true;
    console.log('PRPA', this.participantArray);
    let currentPlayerDetails = this.participantArray[this.currentPlayer.id];
    console.log('PRCP', currentPlayerDetails);
    this.socketioService.playerReady(this.roomPin, currentPlayerDetails); 

    let playerReady = false;
    for (let key of this.objectKeys(this.participantArray)) {
      if (this.participantArray[key].ready === false) {
        return playerReady = false;
        
      } else {
       playerReady = true;
      }
    }
    return this.allPlayersReady = playerReady;

  }


  // //remove?
  receiveJoinedPlayers() {
    this.socketioService.receiveJoinedPlayers().subscribe((message:any) => {  
      this.allPlayersReady = false;
      console.log('joinedP', message);
      let joinedPlayer = message;
      if (!(this.participantArray === undefined)) {
        console.log(this.participantArray);
        this.participantArray[joinedPlayer.id].id = joinedPlayer.id
        this.participantArray[joinedPlayer.id].socketID = joinedPlayer.socketID
        this.participantArray[joinedPlayer.id].ready = joinedPlayer.ready        
        this.participantArray[joinedPlayer.id].roomName = joinedPlayer.roomName
        console.log(this.participantArray);
        console.log(this.objectKeys(this.participantArray).length);
        // console.log(this.readyPlayers);
      }
    });
  }

  playersReady(){
    for (let key of this.objectKeys(this.participantArray)) {
      // as may be undefined
      if (!this.participantArray[key].ready === true) {
        return false
      }
    }
    return true
  }

  receiveReadyPlayers(){
    this.socketioService.receiveReadyPlayers().subscribe((message:any)=> {
      let partArray = message;
      console.log('PI or I', message);
      this.participantArray[partArray.id].ready = true;
      console.log('PA', this.participantArray);
      this.allPlayersReady = this.playersReady();  
      

      // gets latest player ready, could add to participant array then check if all ready?
      // console.log(this.readyPlayers);
      // if (this.readyPlayers === undefined) {
      //   this.readyPlayers = {};
      // // }
      // // console.log(this.readyPlayers);
      // // this.readyPlayers[partArray.id] = message;
      // for (let key of this.objectKeys(this.participantArray)) {
      //   if (!(this.readyPlayers[key] === undefined)) {
      //     if (key === this.readyPlayers[key].id) {
      //       this.participantArray[key].ready = true; 
      //       this.participantArray[key].id = key;
      //     } 
      //   }
      // }
      
      // console.log(this.participantArray);
      // // console.log(this.readyPlayers);

      // console.log(this.objectKeys(this.participantArray).length);
      // // console.log(this.objectKeys(this.readyPlayers).length);

      // if ((this.objectKeys(this.participantArray).length) === (this.objectKeys(this.readyPlayers).length)) {
      //   this.allPlayersReady = true;
      // } else {
      //   this.allPlayersReady = false;
      // }
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
