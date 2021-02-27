import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { GameCreationService } from '../../services/game-creation.service';
import '../../../vendor/jitsi/external_api.js';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('meet') meet: ElementRef | any;
  
  constructor(private gameCreationService: GameCreationService, private router:Router, private route: ActivatedRoute) { }
  displayName = '';
  api: any;
  gameStarted = false;
  joinedRoom = false;
  createdRoom = false;
  roomPin = '';
  options: any;
  domain = 'meet.jit.si';
  errorMessage = '';

  ngOnInit(): void {
  }
  
  createRoom(){
    const game = {
      hostName: this.displayName,
      roomPin: this.roomPin,
    }
    if (game.hostName.length > 0) {
      this.gameCreationService.createGame(game).subscribe(data => {
        if ((data as any).success) {
          this.gameCreationService.getRoomPin(game.roomPin);
          this.router.navigate(['/playgame']);
        } else {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.errorMessage = "Please enter a display name";
      setTimeout(()=>{this.errorMessage = "";}, 3000);
    }
  }

  joinRoom(){
    const game = {
      hostName: '',
      roomPin: this.roomPin,
    }
    if (this.roomPin.length > 0) {
      this.gameCreationService.checkGameExists(game).subscribe((data) => {
        if ((data as any).success) {
          this.gameCreationService.getRoomPin(game.roomPin);
          this.router.navigate(['/playgame']);
        } else {
          this.router.navigate(['/']);
          this.errorMessage = "There is no game with that pin! Check you have entered correctly or create a new game";
          setTimeout(()=>{this.errorMessage = "";}, 3000);
        }
      });
    } else {
      this.errorMessage = "Please enter a pin to join a game";
      setTimeout(()=>{this.errorMessage = "";}, 3000);
    }
    
  }

}
