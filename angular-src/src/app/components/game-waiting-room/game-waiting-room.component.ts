import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '../../../vendor/jitsi/external_api.js';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { SocketioService } from '../../services/socketio.service';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-game-waiting-room',
  templateUrl: './game-waiting-room.component.html',
  styleUrls: ['./game-waiting-room.component.css']
})
export class GamePlayComponent implements OnInit {
  constructor(private gameCreationService: GameCreationService, private router: Router, 
              private actRoute: ActivatedRoute, private socketioService: SocketioService) { }
 
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
  errorMessage = "";
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
  teamNumber = 0;
  isChecked: any;
  hostSubmitted = false;
  hostSubmittedQuestions = false;
  hostDetails: any;
  gameAlreadyBegun: any;
  includeHost = true;
  joined = false;
  teams:any
  rounds:any;
  includeQuestions:any;
  roundsEntered:any;
  counterArray:any;
  showQuestions: any;
  addMoreQuestions: any;
  openQuestionModal: any;
  roundsArray: Array<Array<Number>> = [];
  questionsObject: any;
  hostClaimed:any;
  timerLength = 30;
  saveGameBool: any;

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
        this.receiveTeams();
        this.receiveJoinedPlayers();
        this.receiveReadyPlayers();
        this.receiveBeginGame();
        this.receiveEndGame();
        this.receiveClaimHost();
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
                roomName: this.game.roomPin + 'JordansQuiz' ,  
                configOverwrite: { startWithAudioMuted: true},
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
              this.participantArray = this.api._participants;
              // if joined late set as ready automatically
              if (this.gameAlreadyBegun) {
                this.currentPlayer.ready = true;
                this.participantArray[this.currentPlayer.id].ready = true;
              } else {
                this.currentPlayer.ready = false;
                this.participantArray[this.currentPlayer.id].ready = false;
                this.joined = true;
              }
              this.socketioService.joinGame(this.roomPin, this.currentPlayer);
              this.participantArray[this.currentPlayer.id].id = this.currentPlayer.id;

              setTimeout(()=>{
                this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
                if (!(this.previousPlayers === undefined)) {
                  for (let key of this.objectKeys(this.previousPlayers)) {
                    if (!(this.participantArray[key]===undefined)) {
                      this.participantArray[key] = this.previousPlayers[key];
                    }
                  }
                }
              }, 100);
            });

            this.api.addListener('participantLeft',(message:any)=>{
              this.currentPlayer = message;
              delete this.participantArray[this.currentPlayer.id];
              this.socketioService.playerLeft(this.roomPin, this.currentPlayer);
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
    if (!this.saveGameBool) {
      this.gameCreationService.endGame(this.game).subscribe(()=>{});
    }
  }
  
  saveGame(){
    this.saveGameBool = true;
  }
  generateCode() {
    return Math.random().toString(20).substr(2, 5).toUpperCase();
  }
  beginGame(){
    //loop through partArray, give them unique pin so they can rejoin if needed
    for (let key of this.objectKeys(this.participantArray)) {
      this.participantArray[key].uid = this.generateCode();
    }
    this.socketioService.beginGame(this.roomPin, this.participantArray, this.hostDetails);   
    this.gameStarted = true;
  }

  playerReady(){
    this.isPlayerReady = true;
    this.participantArray[this.currentPlayer.id].ready = true;
    let currentPlayerDetails = this.participantArray[this.currentPlayer.id];
    this.socketioService.playerReady(this.roomPin, currentPlayerDetails); 
    this.allPlayersReady = this.isAllReady()
  }

  receiveJoinedPlayers() {
    this.socketioService.receiveJoinedPlayers().subscribe((message:any)=>{  
      this.allPlayersReady = false;
      let joinedPlayer = message;
      if (!(this.participantArray === undefined)) {
        // this.participantArray[joinedPlayer.id] = {}
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
    this.socketioService.receiveReadyPlayers().subscribe((message:any)=>{
      let partArray = message;
      this.participantArray[partArray.id].ready = true;
      this.allPlayersReady = this.isAllReady();    
    });
  }

  setHost() {
    this.socketioService.claimHost(this.roomPin);
    this.host = true;
    this.participantArray[this.currentPlayer.id].host = true;
    this.playerReady();
    
    let rounds = <HTMLInputElement> document.getElementById('rounds');
    rounds.addEventListener('change', (event:any) => {
      if (Number.isInteger(parseInt(rounds.value))) {
        this.rounds = new Array(parseInt(rounds.value));
      } else {
        //isInt returns NaN
        this.rounds = 0;
      }
      
      if (this.rounds.length > 0) {
        this.roundsEntered = true;
      } else {
        this.roundsEntered = false;
      }
    });

    let slider = <HTMLInputElement> document.getElementById("timerLength")!;
    slider.addEventListener('change', (event:any) => {
      this.timerLength = slider.valueAsNumber;
    });
  }

  counter(i:number){
    this.counterArray = new Array(i);
    return this.counterArray
  }

  setSettings(){
    let team = <HTMLInputElement> document.getElementById('teamNumber')!;
    this.isChecked = <HTMLInputElement> document.getElementById('hostCheckbox');
    let noOfPlayers: any;
    let dismissButton = <HTMLInputElement> document.getElementById('dismissModal')!;

      if (this.isChecked.checked) {
        noOfPlayers = this.objectKeys(this.participantArray).length;
        this.participantArray[this.currentPlayer.id].include = true;
        this.includeHost = true;
      } else {
        noOfPlayers = (this.objectKeys(this.participantArray).length)-1;
        this.participantArray[this.currentPlayer.id].include = false;
        this.includeHost = false;
      }
      let roundsBool;
      this.teamNumber = parseInt(team.value); 
      let button = <HTMLInputElement> document.getElementById('setSettings');
      if (this.teamNumber > 0 && this.teamNumber <= noOfPlayers && this.teamNumber < 11 && !(this.teamNumber === NaN)) {
        // do something to save this?
        if (!(this.rounds === undefined) || (this.rounds === Array(1))){
          if (this.rounds.length > 0) {
            this.showQuestions = true;
            this.roundsArray = [];
            for (let i = 0; i < this.rounds.length; i++) {
              let name = <HTMLInputElement> document.getElementById('round' + (i+1) + 'questions')!;
              if (name.value === "" || name.value === undefined || (name.value) === null) {
                this.errorMessage = "You must enter an integer for each round";
                setTimeout(()=>{this.errorMessage = "";}, 3000);
                roundsBool = false;
                break;
              } else {
                let val = new Array(parseInt(name.value));
                this.roundsArray.push(val);
                roundsBool = true;
              }
            }
            if (roundsBool) {
              dismissButton.click();
            }
          } else {
            this.showQuestions = false;
            dismissButton.click();
          }
        } else {
          this.showQuestions = false;
          dismissButton.click();
        }

      } else {
        this.errorMessage = "There cannot be more teams than players";
        setTimeout(()=>{this.errorMessage = "";}, 3000);
      }

      let buzzerElement = <HTMLInputElement> document.getElementById('buzzerToggle');
      let timerElement = <HTMLInputElement> document.getElementById('timerToggle');
      let timerLengthElement = <HTMLInputElement> document.getElementById('timerLength');
      let timerAutoStartElement = <HTMLInputElement> document.getElementById('timerStart');
      this.socketioService.setGameSettings(this.roomPin, buzzerElement.checked, timerElement.checked,timerLengthElement.value, timerAutoStartElement.checked);

    let teamButton = <HTMLInputElement> document.getElementById("teamSettings");
    teamButton.style.borderColor = "green";
    teamButton.style.color = "green";

    this.hostSubmitted = true;
    this.hostDetails = this.participantArray[this.currentPlayer.id];
    this.hostDetails.teamNumber = this.teamNumber;
  }
  
  setQuestions(){
    let inputButton = <HTMLInputElement> document.getElementById("inputQuestions");
    inputButton.style.borderColor = "green";
    inputButton.style.color = "green";
    this.questionsObject = {};
    for (let i = 0; i < this.rounds.length; i++) {
      this.questionsObject[i+1] = {};
      for (let j = 0; j < this.roundsArray[i].length; j++){
        this.questionsObject[i+1][j+1] = {};  
        let questionElement = <HTMLInputElement> document.getElementById('q'+ (i+1) + (j+1)  )!;
        let answerElement = <HTMLInputElement> document.getElementById('a' + (i+1)+ (j+1) )!;
        let pointsElement = <HTMLInputElement> document.getElementById('p'  + (i+1) +(j+1))!;
        let questionValue;
        let answerValue;
        let pointsValue;
        // to account for inputs left empty
        if (questionElement === null) {
          questionValue = "";
        } else {
          questionValue = questionElement.value
        }
        if (answerElement === null) {
          answerValue = "";
        } else {
          answerValue = answerElement.value
        }
        if (pointsElement === null) {
          pointsValue = "";
        } else {
          pointsValue = pointsElement.value
        }
        this.questionsObject[i+1][j+1].question = questionValue;
        this.questionsObject[i+1][j+1].answer = answerValue;
        this.questionsObject[i+1][j+1].points = pointsValue;
      }
    }
    this.hostSubmittedQuestions = true;
    this.gameCreationService.createQuestions(this.roomPin, this.questionsObject).subscribe(()=>{
    });
  }
  
  rejoinGame(){
    // find player with that unique id and update that current player w new PI and socketID
    let code = <HTMLInputElement> document.getElementById('lateCode')!;
    this.gameCreationService.getPlayers(this.roomPin).subscribe((data:any) => {
      let players = data.players;
      for (let key of this.objectKeys(players)) {
        if (players[key].uid === code.value) {
          this.currentPlayer.uid = players[key].uid;
          this.currentPlayer.colour = players[key].colour;
          players[this.currentPlayer.id] = this.currentPlayer;
          this.socketioService.rejoinPlayer(this.roomPin, players[players[key].id], this.currentPlayer);
          delete players[players[key].id];
          this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
          for (let key of this.objectKeys(this.previousPlayers))  {
            if (key === this.currentPlayer.id) {
              this.previousPlayers[key].colour = this.currentPlayer.colour;
              this.previousPlayers[key].uid = this.currentPlayer.uid;
            }
          }
          this.gameCreationService.setPlayers(this.roomPin, this.previousPlayers).subscribe(()=>{
          });
          this.gameStarted = true;
        }
      } 
    });
  }

  receiveHostDetails(){
    this.socketioService.receiveHostDetails().subscribe((host:any)=>{
      this.hostDetails = host;
    });
  }

  receiveEndGame() {
    this.socketioService.receiveEndGame().subscribe((message: any)=>{
      if (message.includes('ended')) {
        this.gameStarted = false;
        this.endGame();
      }
    });
  }

  receiveBeginGame() {
    this.socketioService.receiveBeginGame().subscribe((message:any)=>{
      if (!this.gameAlreadyBegun){
        this.participantArray = message;
        this.gameCreationService.setPlayers(this.roomPin, message).subscribe(()=>{
        });
        this.gameStarted = true;
        this.gameAlreadyBegun = true;
      } 
    });
  }

  receiveTeams(){
    this.socketioService.receiveTeams().subscribe((teams:any)=>{
      this.teams = teams;
    });
  }

  receiveClaimHost(){
    this.socketioService.receiveClaimHost().subscribe((teams:any)=>{
      this.hostClaimed = true;
    });
  }
}
