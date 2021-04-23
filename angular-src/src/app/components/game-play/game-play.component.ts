import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SocketioService } from '../../services/socketio.service';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() roomPin:any;
  @Input() hostDetails: any;
  @Input() player: any;
  @Input() teams: any;
  objectKeys = Object.keys;
  currentPlayer:any;
  api: any;
  toastMessage: any;
  url: any;
  game: any;
  participantArray: any;
  host: any;
  teamNumber: any;
  playerColour: any;
  buzzerPress = false;
  buzzerDetails: any;
  gameSettingsOpened: any;
  currentRound: any;
  currentQuestion = 0;
  firstQuestionBool: any;
  firstRoundBool: any;
  timerLength = 30;
  questionObject: any;
  numberOfRounds: any;
  numberOfQuestions: any;
  showQuestions: any;
  lastRoundBool = false;
  nextRoundBool = false;
  showAllAnswersBool = false;
  lastQuestionBool = false;
  showAnswersBool = false;
  endOfGame = false;
  interVal:any;
  showBuzzer:any;
  showTimer:any;
  buzzerEnabled = true;
  timerEnabled = true;
  timerStarted:any;
  currentTimer = 0;
  reconnectPlayerBool: any;
  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

  ngOnInit(): void {
    // set listeners 
    this.receiveBuzzerPressed();
    this.receiveNextQuestion();
    this.receiveStartRound();
    this.receiveNextRound();
    this.receiveEndGamePlay();
    this.receiveShowAnswers();
    this.receiveReset();
    this.receiveGameSettings();
    this.receiveStartTimer();
    
    this.gameCreationService.getQuestions(this.roomPin).subscribe( (data:any) => {
      this.questionObject = data.questions;
      if (this.questionObject === undefined) {
        this.showQuestions = false;
        this.showBuzzer = true;
        this.showTimer = true;
      } else {
        this.showQuestions = true;
        this.showBuzzer = false;
        this.showTimer = false
        if (this.objectKeys(this.questionObject).length > 0) {
          this.currentRound = 1;
          this.firstQuestionBool = true;
          this.firstRoundBool = true;
          this.numberOfRounds = this.objectKeys(this.questionObject).length;
          this.numberOfQuestions =  this.objectKeys(this.questionObject[this.currentRound]).length
        }
      }
    });
  }

  ngAfterViewInit(){
    this.teamNumber = this.hostDetails.teamNumber;
    this.currentPlayer = this.player;
    // this.playerColour = this.currentPlayer.colour
    console.log('CP on init', this.currentPlayer);
    if (!(this.currentPlayer.colour === undefined)) {
      this.playerColour = this.currentPlayer.colour;
    }
    setTimeout( () => {
      this.gameCreationService.getPlayers(this.roomPin).subscribe((data:any) => {
        console.log('data in GP', data);
        console.log('players in GP', data.players);
        this.participantArray = data.players;
        console.log('PA[CP]', this.participantArray[this.currentPlayer.id])
        if (this.participantArray[this.currentPlayer.id] === undefined) {
          // rejoined player
          for (let keys of Object.keys(this.participantArray)) {
            if ((this.participantArray[keys].uid === this.currentPlayer.uid)) {
              // this.current
            }
          }
        } else {
          this.currentPlayer = this.participantArray[this.currentPlayer.id];
          console.log('in else?', this.currentPlayer);
        }
      });
      console.log('teams',this.teams);
      for (let colour of this.objectKeys(this.teams)){
        document.getElementById(colour)!.style.color = colour;
        for (let player of this.objectKeys(this.teams[colour])){
          if (this.currentPlayer.id === this.teams[colour][player].id) {
            this.playerColour = colour;
            this.currentPlayer.colour = colour;
          }
        }
      }
      if (!this.hostDetails.include) {
        this.playerColour = "darkgoldenrod";
      }
      if (this.teams) {
        document.getElementById('teamButton')!.click();
      }
      if (this.hostDetails.id === this.currentPlayer.id) {
        this.host = true;
      }
    }, 500)
  }

  receiveBuzzerPressed(){
    this.socketioService.receiveBuzzerPressed().subscribe((player:any)=>{
      let element = <HTMLInputElement> document.getElementById('buzzer');
      element.disabled = true;
      this.buzzerDetails = player;
      this.buzzerPress = true;
    });
  }
 
  buzzerPressed(){
    this.socketioService.buzzerPressed(this.roomPin, this.currentPlayer.displayName, this.playerColour);
  }

  saveSettings(){
    let buzzerElement = <HTMLInputElement> document.getElementById('buzzerToggle');
    let timerElement = <HTMLInputElement> document.getElementById('timerToggle');
    let hostElement = <HTMLInputElement> document.getElementById('hostToggle');
    let timerLengthElement = <HTMLInputElement> document.getElementById('timerLength');
    let timerAutoStartElement = <HTMLInputElement> document.getElementById('timerStart');
    if (hostElement.checked === true){
      this.currentPlayer.host = true;
      this.socketioService.setNewHostDetails(this.roomPin, this.currentPlayer);
    }
    this.socketioService.setGameSettings(this.roomPin, buzzerElement.checked, timerElement.checked,timerLengthElement.value, timerAutoStartElement.checked);
  }

  startRound(){
    this.socketioService.startRound(this.roomPin, this.currentRound);
  }

  endGamePlay(){
    this.socketioService.endGamePlay(this.roomPin)
  }

  nextRound(){
    this.socketioService.nextRound(this.roomPin);
  }

  showAnswers(){
    this.socketioService.showAnswers(this.roomPin, 'one');
  }
  
  showAllAnswers(){
    this.socketioService.showAnswers(this.roomPin, 'all');
  }

  previousQuestion(){
   this.currentQuestion -=1;
    this.socketioService.nextQuestion(this.roomPin, this.currentQuestion);
  }

  nextQuestion(){
    this.currentQuestion +=1;
    this.socketioService.nextQuestion(this.roomPin, this.currentQuestion);
  }

  receiveNextQuestion(){
    this.socketioService.receiveNextQuestion().subscribe( (data:any) => {
      this.currentQuestion = data;
      if (this.currentQuestion+1 <= this.objectKeys(this.questionObject[this.currentRound]).length) {
        this.lastQuestionBool = false;
      } else {
        this.lastQuestionBool = true;
      }
      if (this.currentQuestion > 1) {
        this.firstQuestionBool = false;
      } else {
        this.firstQuestionBool = true;
      }
      this.reset();
      if (this.timerAutoStart) {
        this.startTimer()
      }
    });
  }
 
  startTimer(){
    this.socketioService.startTimer(this.roomPin, true);
  }

  stopTimer(){
    this.socketioService.startTimer(this.roomPin, false);
  }

  receiveStartRound(){
    this.socketioService.receiveStartRound().subscribe( (data:any) => {
      this.currentRound = data; 
      if (this.currentRound+1 <= this.objectKeys(this.questionObject).length) {
        this.lastRoundBool = false;
      } else {
        this.lastRoundBool = true;
      }
      this.currentQuestion = 1;
      this.firstQuestionBool = true;

      if (this.currentQuestion+1 <= this.objectKeys(this.questionObject[this.currentRound]).length) {
        this.lastQuestionBool = false;
      } else {
        this.lastQuestionBool = true;
      }

      this.reset();
      if (this.showAllAnswersBool || this.showAnswersBool) {
        this.showBuzzer = false;
        this.showTimer = false;
      } else {
        this.showBuzzer = true;
        this.showTimer = true;
        this.buzzerPress = false;
      }
        if (this.timerEnabled && this.showTimer && (!document.getElementById('timer') === null)){
          clearInterval(this.interVal);
          document.getElementById('timer')!.innerHTML = this.timerLength + '';
        }
          if (this.timerAutoStart) {
            this.startTimer()
          }
    });
  }
  // reconnectPlayer(){
  //   console.log('reconnect');
  //   console.log(this.participantArray);
  //   this.reconnectPlayerBool = true;
  //   // for (let player of this.objectKeys(this.participantArray)){
  //   //   if 
  //   //   // for (let play of this.objectKeys(this.playerObject)) {
  //   //     if (this.playerObject[player]===undefined) {
  //   //       console.log(this.participantArray[player]);
  //   //     }
  //     // }
  //   // }
  // }

  logCurrentPlayer(){
    console.log(this.currentPlayer);
  }

  reset(){
    if (this.buzzerEnabled && this.showBuzzer) {
      let element = <HTMLInputElement> document.getElementById('buzzer');
      element.disabled = false;
      this.buzzerPress = false;
    }
    if (this.timerEnabled && this.showTimer) {
      clearInterval(this.interVal);
      document.getElementById('timer')!.innerHTML = this.timerLength + '';
      this.currentTimer = this.timerLength;
    }
    if (this.timerAutoStart) {
      this.stopTimer();
    }
  }

  receiveNextRound(){
    this.socketioService.receiveNextRound().subscribe( (data:any) => {
      this.lastQuestionBool = false;
      this.currentQuestion = 0;
      this.currentRound +=1;
      this.showAnswersBool = false;
      this.numberOfQuestions =  this.objectKeys(this.questionObject[this.currentRound]).length
         
      let element = <HTMLInputElement> document.getElementById('buzzer');
      if (!(this.showAllAnswersBool || this.showAnswersBool)){
        element.disabled = false;
        this.buzzerPress = false;
      }
      this.showTimer = false;
      this.showBuzzer = false;
      this.reset();
    });
  }

  receiveEndGamePlay(){
    this.socketioService.receiveEndGamePlay().subscribe( (data:any) => {
      this.endOfGame = true;
    });
  }

  receiveShowAnswers(){
    this.socketioService.receiveShowAnswers().subscribe( (data:any) => {
      if (data === 'one') {
        this.showAnswersBool = true;
      } else if (data === 'all') {
        this.showAllAnswersBool = true;
        this.showAnswersBool = false;
      }
      this.currentQuestion = 0;
      this.showBuzzer = false;
      this.showTimer = false;
    });
  }
  receiveReset(){
    this.socketioService.receiveReset().subscribe( (data:any) => {
      if (data === 'both') {
        this.reset();
      } else if (data === 't') {
        clearInterval(this.interVal);
        document.getElementById('timer')!.innerHTML = this.timerLength + '';
        this.currentTimer = this.timerLength;
        this.timerStarted = false;
      } else if (data === 'b') {
        let element = <HTMLInputElement> document.getElementById('buzzer');
        element.disabled = false;
        this.buzzerPress = false;
      }
    });
  }

  onReset(){
    this.socketioService.reset(this.roomPin, 'both');
  }

  onResetTimer(){
    this.socketioService.reset(this.roomPin, 't');
  }

  onResetBuzzer(){
    this.socketioService.reset(this.roomPin, 'b');
  }
  timerAutoStart:any;
  receiveGameSettings(){
    this.socketioService.receiveGameSettings().subscribe( (data:any) => {
      this.buzzerEnabled = data.buzzer;
      this.timerEnabled = data.timer;
      this.timerAutoStart = data.timerStart
      this.timerLength = (parseFloat(data.timerLength) * 60);
    });
  }

  receiveStartTimer(){
    this.socketioService.receiveStartTimer().subscribe( (data:any) => {
    if (data) {
      this.timerStarted = true;
      if (this.currentTimer < 1) {
        this.currentTimer = this.timerLength;
      }
        this.interVal = setInterval( () => {
          this.currentTimer -=1;
          document.getElementById('timer')!.style.fontFamily = "Cabin Sketch";
          document.getElementById('timer')!.style.fontWeight = "500";
          document.getElementById('timer')!.style.fontSize ="xx-large";
          document.getElementById('timer')!.innerHTML = this.currentTimer + '';
          if (this.currentTimer < 0) {
            clearInterval(this.interVal);
            document.getElementById('timer')!.style.fontFamily = "Cabin Sketch";
            document.getElementById('timer')!.style.fontWeight = "500";
            document.getElementById('timer')!.style.fontSize ="x-large";
            document.getElementById('timer')!.innerHTML = "Time's Up";
            this.timerStarted = false;
            clearInterval(this.interVal);
          }
         }, 1000);
    } else {
      this.timerStarted = false;
      clearInterval(this.interVal);
    }
    });
  }
}
