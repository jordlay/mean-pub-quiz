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
  objectKeys = Object.keys;

  constructor(private socketioService: SocketioService, private router: Router, 
    private actRoute: ActivatedRoute, private gameCreationService: GameCreationService) { }

  
  
  ngOnInit(): void {
    // this.receiveTeams();
    // this.receiveBuzzerPressed();
    console.log('in GD');
    console.log('PD', this.playerObject);
    console.log('HD', this.hostDetails);
    console.log('CP', this.currentPlayer);
    console.log('T', this.teams);
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
      document.getElementById('buzzerDetails')!.style.color = this.buzzerDetails.colour;
    });
  }
 
  buzzerPressed(){
    
    let element = <HTMLInputElement> document.getElementById('buzzer');
    element.disabled = true;
    this.buzzerPress = true;
    console.log('BP', this.buzzerPress);
    this.socketioService.buzzerPressed(this.roomPin, this.currentPlayer.displayName, this.playerColour);
  }

}
