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

  objectKeys = Object.keys;
  questionObject: any;
  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

  
  
  ngOnInit(): void {
    // this.receiveTeams();
    // this.receiveBuzzerPressed();
    this.receiveNextQuestion();
    this.receiveStartRound();
    this.receiveNextRound();
    this.receiveEndGamePlay();
    this.receiveShowAnswers();
    this.gameCreationService.getQuestions(this.roomPin).subscribe( (data:any) => {
      console.log(data);
      console.log(data.questions);
      this.questionObject = data.questions;
    });
    console.log('in GD');
    console.log('PD', this.playerObject);
    console.log('HD', this.hostDetails);
    console.log('CP', this.currentPlayer);
    console.log('T', this.teams);
    console.log(this.questionObject);
    setTimeout( () => {
      if (Object.keys(this.questionObject).length > 1) {
        this.currentRound = 1;
      }
    }, 1000);

  }

  ngAfterViewInit(){
    console.log(this.hostDetails);
    this.teamNumber = this.hostDetails.teamNumber;
    setTimeout( () => {
      
    this.receiveBuzzerPressed();
      console.log(this.teams);
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
      console.log(this.playerColour);
      this.receiveBuzzerPressed();
      console.log(this.buzzerDetails);
    }, 100)

    setTimeout( () => {
      console.log('STO');
      this.receiveBuzzerPressed();
    }, 1000);

  }

  receiveBuzzerPressed(){
    this.socketioService.receiveBuzzerPressed().subscribe((player:any)=>{
    
      let element = <HTMLInputElement> document.getElementById('buzzer');
      element.disabled = true;
      console.log('RBP', player);
      this.buzzerDetails = player;
      this.buzzerPress = true;
      setTimeout( () => {
        document.getElementById('buzzerDetails')!.style.color = this.buzzerDetails.colour;
      }, 10);
    });
  }
 
  buzzerPressed(){
    let element = <HTMLInputElement> document.getElementById('buzzer');
    element.disabled = true;
    this.buzzerPress = true;
    console.log('BP', this.buzzerPress);
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
    this.socketioService.startRound(this.roomPin, this.currentRound);
    if (this.currentRound+1 <= Object.keys(this.questionObject).length) {
      this.lastRoundBool = false;
    } else {
      this.lastRoundBool = true;
    }
    this.currentQuestion = 1;
    if (this.currentQuestion+1 <= Object.keys(this.questionObject[this.currentRound]).length) {
      this.lastQuestionBool = false;
    } else {
      this.lastQuestionBool = true;
    }
  }

  
  endOfGame = false;
  endGamePlay(){
    this.socketioService.endGamePlay(this.roomPin)
  }
  nextRound(){
    console.log(Object.keys(this.questionObject).length);
    this.socketioService.nextRound(this.roomPin);

    // need to add logic from start round? so that the rest start also?
  }
  lastQuestionBool = false;
  showAnswersBool = false;
  showAnswers(){
    this.showAnswersBool = true;
    this.socketioService.showAnswers(this.roomPin);
  }
  nextQuestion(){
    console.log(Object.keys(this.questionObject[this.currentRound]).length, Object.keys(this.questionObject[this.currentRound]));
    this.currentQuestion +=1;
    this.socketioService.nextQuestion(this.roomPin, this.currentQuestion);
    if (this.currentQuestion+1 <= Object.keys(this.questionObject[this.currentRound]).length) {
      this.lastQuestionBool = false;
    } else {
      this.lastQuestionBool = true;
    }
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
    });
  }

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
      if (this.currentQuestion+1 <= Object.keys(this.questionObject[this.currentRound]).length) {
        this.lastQuestionBool = false;
      } else {
        this.lastQuestionBool = true;
      }
    });
  }

  receiveNextRound(){
    this.socketioService.receiveNextRound().subscribe( (data:any) => {
      console.log(data);
      this.lastQuestionBool = false;
      this.currentQuestion = 0;
      this.currentRound +=1;
      this.showAnswersBool = false;
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
      this.showAnswersBool = true;
      this.currentQuestion = 0;
    });
  }

}
