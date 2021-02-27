import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '../../../vendor/jitsi/external_api.js';
import { GameCreationService } from '../../services/game-creation.service'
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  constructor(private gameCreationService: GameCreationService, private router: Router) { }
  game: any;
  data: any;
  api: any;
  gameStarted = false;
  joinedRoom = false;
  createdRoom = false;
  roomPin: any;
  options: any;
  domain = 'meet.jit.si';
  hostname: any;
  errorMessage: any;
  @ViewChild('meet') meet: ElementRef | any;

  ngOnInit(): void {
    this.game = {
      hostName: String,
      roomPin: String
    }
  }

  ngAfterViewInit() {
    // try without timeout
    setTimeout(()=>{}, 3000);
    this.gameCreationService.getMeetingParams().subscribe(data => {
      this.data = data;
      if (this.data.success) {
        
        this.game = this.data.game;
        this.options = { 
            roomName: this.game.roomPin + 'JordansQuiz',  
            configOverwrite: { startWithAudioMuted: true },
            width: 500, 
            height: 500, 
            parentNode: this.meet.nativeElement,
            userInfo: {
              displayName: this.game.hostName
          }
        }
        setTimeout(()=>{}, 3000);
        this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  
      } else {
        this.errorMessage = "You must create or enter a pin";
      }
     

      
    });
  }

  endGame(){
    this.api.dispose();
    this.router.navigate(['/']);
    this.gameCreationService.endGame(this.game).subscribe( () => {});
  }
}
