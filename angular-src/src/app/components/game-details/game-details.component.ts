import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SocketioService } from '../../services/socketio.service';
import { GameCreationService } from '../../services/game-creation.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() roomPin:any;
  @Input() playerObject: any;
  @Input() hostDetails: any;
  @Input() currentPlayer: any;
  @Input() teams: any;
  // @ViewChild('teamButton') teamButton!:ElementRef;

  api: any;
  toastMessage: any;
  // roomPin: any;
  url: any;
  game: any;
  participantArray: any;
  host: any;
  teamNumber: any;
  playerColour: any;
  // teams: any;
  buzzerPress = false;
  buzzerDetails: any;
  gameSettingsOpened: any;
  currentRound: any;
  currentQuestion = 0;
  firstQuestionBool: any;
  firstRoundBool: any;
  timerLength = 30;
  objectKeys = Object.keys;
  questionObject: any;
  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

    numberOfRounds: any;
    numberOfQuestions: any;
    showQuestions: any;
  ngOnInit(): void {
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
      console.log(data.questions);
      this.questionObject = data.questions;
      if (this.questionObject === undefined) {
        this.showQuestions = false;
        this.showBuzzer = true;
        this.showTimer = true;
      } else {
        this.showQuestions = true;
        this.showBuzzer = false;
        this.showTimer = false
        if (Object.keys(this.questionObject).length > 0) {
          this.currentRound = 1;
          this.firstQuestionBool = true;
          this.firstRoundBool = true;
          this.numberOfRounds = Object.keys(this.questionObject).length;
          this.numberOfQuestions =  Object.keys(this.questionObject[this.currentRound]).length
        }
      }
    });
  }

  ngAfterViewInit(){
    this.teamNumber = this.hostDetails.teamNumber;
    setTimeout( () => {
      for (let colour of this.objectKeys(this.teams)){
        document.getElementById(colour)!.style.color = colour;
        for (let player of this.objectKeys(this.teams[colour])){
          if (this.currentPlayer.id === this.teams[colour][player].id) {
            this.playerColour = colour;
            this.currentPlayer.colour = colour;
          }
        }
      }
      console.log(this.teams, this.currentPlayer);
      if (!this.hostDetails.include) {
        this.playerColour = "darkgoldenrod";
      }
      if (this.teams) {
        document.getElementById('teamButton')!.click();
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
    if (hostElement.checked === true){
      this.currentPlayer.host = true;
      this.socketioService.setNewHostDetails(this.roomPin, this.currentPlayer);
    }
    this.socketioService.setGameSettings(this.roomPin, buzzerElement.checked, timerElement.checked,timerLengthElement.value);
  }
  lastRoundBool = false;
  nextRoundBool = false;
  startRound(){
    console.log('STARTROUND', this.currentRound);
    this.socketioService.startRound(this.roomPin, this.currentRound);
  }
  showAllAnswersBool = false;
  lastQuestionBool = false;
  showAnswersBool = false;
  endOfGame = false;

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
      console.log('QLEN RNQ', Object.keys(this.questionObject[this.currentRound]).length);
      console.log(Object.keys(this.questionObject[this.currentRound]).length, Object.keys(this.questionObject[this.currentRound]));
      this.currentQuestion = data;
      if (this.currentQuestion+1 <= Object.keys(this.questionObject[this.currentRound]).length) {
        this.lastQuestionBool = false;
      } else {
        this.lastQuestionBool = true;
      }
      if (this.currentQuestion > 1) {
        this.firstQuestionBool = false;
      } else {
        this.firstQuestionBool = true;
      }
      let element = <HTMLInputElement> document.getElementById('buzzer');
      if (!(this.showAllAnswersBool || this.showAnswersBool)){
        element.disabled = false;
        this.buzzerPress = false;
      }
      // this.stopTimer();
      this.reset();
    });
  }
  interVal:any;
  startTimer(){
    this.socketioService.startTimer(this.roomPin, true);
  }

  stopTimer(){
    this.socketioService.startTimer(this.roomPin, false);
  }
  showBuzzer:any;
  showTimer:any;
  receiveStartRound(){
    this.socketioService.receiveStartRound().subscribe( (data:any) => {
      console.log('ROUND');
      this.currentRound = data;
      console.log(this.currentRound,this.showAnswersBool, this.showAllAnswersBool, this.currentQuestion);
      
      if (this.currentRound+1 <= Object.keys(this.questionObject).length) {
        this.lastRoundBool = false;
      } else {
        this.lastRoundBool = true;
      }
      this.currentQuestion = 1;
      this.firstQuestionBool = true;

      if (this.currentQuestion+1 <= Object.keys(this.questionObject[this.currentRound]).length) {
        this.lastQuestionBool = false;
      } else {
        this.lastQuestionBool = true;
      }
      if (this.showAllAnswersBool || this.showAnswersBool) {
        this.showBuzzer = false;
        this.showTimer = false;
      } else {
        this.showBuzzer = true;
        this.showTimer = true;
        this.buzzerPress = false;
        if (this.timerEnabled && this.showTimer && (!document.getElementById('timer') === null)){
          clearInterval(this.interVal);
          document.getElementById('timer')!.innerHTML = this.timerLength + '';
        }

      }
    
      console.log(this.currentRound,this.showAnswersBool, this.showAllAnswersBool, this.currentQuestion);
      console.log(this.firstQuestionBool, this.lastQuestionBool, this.lastRoundBool)
    });
  }

  reset(){
    // FOR NO QUESTIONS
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
    this.timerStarted = false;
  }

  receiveNextRound(){
    this.socketioService.receiveNextRound().subscribe( (data:any) => {
      console.log(data);
      this.lastQuestionBool = false;
      this.currentQuestion = 0;
      this.currentRound +=1;
      this.showAnswersBool = false;
      this.numberOfQuestions =  Object.keys(this.questionObject[this.currentRound]).length
         
      let element = <HTMLInputElement> document.getElementById('buzzer');
      if (!(this.showAllAnswersBool || this.showAnswersBool)){
        element.disabled = false;
        this.buzzerPress = false;
      }
      this.showTimer = false;
      this.showBuzzer = false;
      // this.stopTimer();
      this.reset();
    });
  }

  receiveEndGamePlay(){
    this.socketioService.receiveEndGamePlay().subscribe( (data:any) => {
      console.log(data);
      this.endOfGame = true;
    });
  }

  receiveShowAnswers(){
    this.socketioService.receiveShowAnswers().subscribe( (data:any) => {
      console.log(data);
      if (data === 'one') {
        this.showAnswersBool = true;
      } else if (data === 'all') {
        this.showAllAnswersBool = true;
        this.currentRound = 1;
      }
      this.currentQuestion = 0;
      this.showBuzzer = false;
      this.showTimer = false;
    });
  }
  receiveReset(){
    this.socketioService.receiveReset().subscribe( (data:any) => {
      console.log(data);
      this.reset();
    });
  }

  onReset(){
    this.socketioService.reset(this.roomPin);
  }

  buzzerEnabled = true;
  timerEnabled = true;
  receiveGameSettings(){
    this.socketioService.receiveGameSettings().subscribe( (data:any) => {
      console.log(data);
      this.buzzerEnabled = data.buzzer;
      this.timerEnabled = data.timer;
      this.timerLength = (parseFloat(data.timerLength) * 60);
      document.getElementById('timer')!.style.fontFamily = "Cabin Sketch";
      document.getElementById('timer')!.style.fontWeight = "500";
      document.getElementById('timer')!.style.fontSize ="xx-large";
      document.getElementById('timer')!.innerHTML = this.timerLength + '';
    });
  }
  timerStarted:any;
  currentTimer = 0;

  // cT < 1?
  receiveStartTimer(){
    this.socketioService.receiveStartTimer().subscribe( (data:any) => {
    console.log(data);
    if (data) {
      this.timerStarted = true;
      // let time = this.timerLength;
      if (this.currentTimer < 1) {
        this.currentTimer = this.timerLength;
      }
      // if (!document.getElementById('timer')===null){
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
      // }
    } else {
      this.timerStarted = false;
      clearInterval(this.interVal);
    }
    });
  }
}
