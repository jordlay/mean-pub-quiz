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
  @Input() roomPin:any;
  @Input() playerObject: any;
  @Input() hostDetails: any;
  @Input() currentPlayer: any;
  @Input() teams: any;

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
    
    this.gameCreationService.getQuestions(this.roomPin).subscribe( (data:any) => {
      console.log(data.questions);
      this.questionObject = data.questions;
      if (this.questionObject === undefined) {
        this.showQuestions = false;
        this.showBuzzer = true;
      } else {
        this.showQuestions = true;
        this.showBuzzer = false;
        if (Object.keys(this.questionObject).length > 0) {
          this.currentRound = 1;
          this.firstQuestionBool = true;
          this.firstRoundBool = true;
          this.numberOfRounds = Object.keys(this.questionObject).length;
          this.numberOfQuestions =  Object.keys(this.questionObject[this.currentRound]).length
        }
      }
    });
    // setTimeout( () => {
    //   if (Object.keys(this.questionObject).length > 0) {
    //     this.currentRound = 1;
    //     this.firstQuestionBool = true;
    //     this.firstRoundBool = true;
    //     this.numberOfRounds = Object.keys(this.questionObject).length;
    //     this.numberOfQuestions =  Object.keys(this.questionObject[this.currentRound]).length
    //   }
    // }, 500);

  }

  ngAfterViewInit(){
    this.teamNumber = this.hostDetails.teamNumber;
    setTimeout( () => {
      for (let colour of this.objectKeys(this.teams)){
        document.getElementById(colour)!.style.color = colour;
        for (let player of this.objectKeys(this.teams[colour])){
          if (this.currentPlayer.id === this.teams[colour][player].id) {
            this.playerColour = colour;
          }
        }
      }
      if (!this.hostDetails.include) {
        this.playerColour = "darkgoldenrod";
      }
    }, 100)

  }

  receiveBuzzerPressed(){
    this.socketioService.receiveBuzzerPressed().subscribe((player:any)=>{
      let element = <HTMLInputElement> document.getElementById('buzzer');
      element.disabled = true;
      this.buzzerDetails = player;
      this.buzzerPress = true;
      setTimeout( () => {
        document.getElementById('buzzerDetails')!.style.color = this.buzzerDetails.colour;
      }, 10);
    });
  }
 
  buzzerPressed(){
    this.socketioService.buzzerPressed(this.roomPin, this.currentPlayer.displayName, this.playerColour);
  }

  reset(){
    // FOR NO QUESTIONS
    this.socketioService.reset(this.roomPin);
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

    });
  }

  showBuzzer:any;
  receiveStartRound(){
    this.socketioService.receiveStartRound().subscribe( (data:any) => {
      console.log(data);
      console.log('RLEN RSR', Object.keys(this.questionObject).length);
      this.currentRound = data;

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
        this.showBuzzer = false
      } else {
        this.showBuzzer = true;
      }
      this.buzzerPress = false;
    });
  }

  receiveNextRound(){
    this.socketioService.receiveNextRound().subscribe( (data:any) => {
      console.log(data);
      this.lastQuestionBool = false;
      this.currentQuestion = 0;
      this.currentRound +=1;
      this.showAnswersBool = false;
      this.numberOfQuestions =  Object.keys(this.questionObject[this.currentRound]).length

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
    });
  }
  receiveReset(){
    this.socketioService.receiveReset().subscribe( (data:any) => {
      console.log(data);
      // this.endOfGame = true;
      let element = <HTMLInputElement> document.getElementById('buzzer');
        element.disabled = false;
        this.buzzerPress = false;
      //buzzer stuff
    });
  }
}
