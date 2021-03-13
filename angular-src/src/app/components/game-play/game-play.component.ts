import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '../../../vendor/jitsi/external_api.js';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { SocketioService } from '../../services/socketio.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
  host: any;
  teamNumber: any
  isChecked: any;
  hostSubmitted = false;
  hostDetails: any;
  gameAlreadyBegun: any;
  includeHost = true;
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
    // create room 
    this.socketioService.connect(this.roomPin);
    this.gameStarted = false;
    // check if game begun
    this.socketioService.receiveGameBegun().subscribe( (message:any)=> {
      this.gameAlreadyBegun = message;
    });
    // set observable listeners
    this.receiveHostDetails();
    this.receiveJoinedPlayers();
    this.receiveReadyPlayers();
    this.receiveBeginGame();
    this.receiveEndGame();
    // get players who joined before user connected
    this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
    // get meeting parameters
    this.gameCreationService.getMeetingParams(this.roomPin).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        this.game = this.data.game;
        let displayName = this.gameCreationService.getDisplayName();
        // set displayName based on whether created game or joined
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
        // create Jitsi meeting 
        this.api = new JitsiMeetExternalAPI(this.domain, this.options);
        // add listener when user joins call
        this.api.addListener('videoConferenceJoined', (message:any)=>{
          
          this.allPlayersReady = false;
          this.currentPlayer = message;
          console.log('CP', this.currentPlayer);
          this.participantArray = this.api._participants;
          if (this.gameAlreadyBegun) {
            this.currentPlayer.ready = true;
            this.participantArray[this.currentPlayer.id].ready = true;
          } else {
            this.currentPlayer.ready = false;
            this.participantArray[this.currentPlayer.id].ready = false;
          }
          this.socketioService.joinGame(this.roomPin, this.currentPlayer);
          this.participantArray[this.currentPlayer.id].id = this.currentPlayer.id;
          console.log('PA', this.participantArray[this.currentPlayer.id]);
          console.log(this.socketioService.getPreviousJoinedPlayers());

          setTimeout(()=>{
            this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
            console.log(this.previousPlayers);
            if (!(this.previousPlayers === undefined)) {
              for (let key of this.objectKeys(this.previousPlayers)) {
                // if (!this.previousPlayers[key] === undefined) {
                //   this.participantArray[key].ready = this.previousPlayers[key].ready;
                //   this.participantArray[key].socketID = this.previousPlayers[key].socketID
                // }
                if (this.previousPlayers[key].ready === true && !(this.participantArray[key]===undefined)) {
                  this.participantArray[key].ready = true;
                  this.participantArray[key].socketID = this.previousPlayers[key].socketID
                }
              }
            }
            // if (this.gameAlreadyBegun) {
            //   this.gameStarted = true;
            //   // this.beginGame();
            // }
            console.log(this.gameAlreadyBegun);
          }, 1000);
        });

        this.api.addListener('participantLeft', (message:any)=>{
          console.log(message);
          this.currentPlayer = message;
          console.log('BPA', this.participantArray);
          delete this.participantArray[this.currentPlayer.id];
          console.log('APA', this.participantArray);

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
    this.socketioService.beginGame(this.roomPin, this.participantArray, this.hostDetails);
    this.gameStarted = true;
  }

  playerReady(){
    this.isPlayerReady = true;
    this.participantArray[this.currentPlayer.id].ready = true;
    console.log('PRPA', this.participantArray);
    let currentPlayerDetails = this.participantArray[this.currentPlayer.id];
    console.log('PRCP', currentPlayerDetails);
    this.socketioService.playerReady(this.roomPin, currentPlayerDetails); 
    this.allPlayersReady = this.isAllReady()
  }

  receiveJoinedPlayers() {
    this.socketioService.receiveJoinedPlayers().subscribe((message:any) => {  
      this.allPlayersReady = false;
      let joinedPlayer = message;
      if (!(this.participantArray === undefined)) {
        this.participantArray[joinedPlayer.id].id = joinedPlayer.id
        this.participantArray[joinedPlayer.id].socketID = joinedPlayer.socketID
        this.participantArray[joinedPlayer.id].ready = joinedPlayer.ready        
        this.participantArray[joinedPlayer.id].roomName = joinedPlayer.roomName
      }
    });
  }

  isAllReady(){
    for (let key of this.objectKeys(this.participantArray)) {
      // as may be undefined
      if (!this.participantArray[key].host === true) {
        if (!this.participantArray[key].ready === true) {
          return false
        }
      }
    
    }
    return true
  }

  receiveReadyPlayers(){
    this.socketioService.receiveReadyPlayers().subscribe((message:any)=> {
      let partArray = message;
      this.participantArray[partArray.id].ready = true;
      this.allPlayersReady = this.isAllReady();    
    });
  }

  setHost() {
    this.host = true;
    this.participantArray[this.currentPlayer.id].host = true;
  }

  setSettings(){
    this.hostSubmitted = true;
    this.isChecked = document.getElementById('hostCheckbox');
    if (this.isChecked.checked === true) {
      console.log('checked!');
      this.participantArray[this.currentPlayer.id].include = true;
      this.includeHost = true;
    } else {
      console.log('unchecked');
      console.log(this.participantArray);
      this.participantArray[this.currentPlayer.id].include = false;
      this.includeHost = false;
      console.log(this.participantArray);
    }
    this.playerReady();
    this.hostDetails = this.participantArray[this.currentPlayer.id];
    this.hostDetails.teamNumber = this.teamNumber;
    console.log(this.hostDetails);
    //then save host settings to db?
  }

  joinGameLate(){
    this.gameStarted = true;
    console.log('JGL', this.participantArray);
  }

  receiveHostDetails(){
    this.socketioService.receiveHostDetails().subscribe( (host:any)=> {
      this.hostDetails = host;
      console.log('RHD', host);
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
      this.participantArray = message;
      console.log('RBG', message);
      if (!this.gameAlreadyBegun){
        this.gameStarted = true;
      }  
    });
  }
}
