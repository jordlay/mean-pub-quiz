import { OnInit, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '../../../vendor/jitsi/external_api.js';
import { GameCreationService } from '../../services/game-creation.service'
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
  isHost = false;
  url = '';
  objectKeys = Object.keys;
  participantArray: any;
  @ViewChild('meet') meet: ElementRef | any;

  ngOnInit(): void {
   
    this.url = window.location.href;
    this.roomPin = this.actRoute.snapshot.params.pin;
    this.socketioService.connect(this.roomPin);
    this.game = {
      hostName: String,
      roomPin: this.roomPin,
      displayName: String
    }
  }

  ngAfterViewInit() {
    this.gameCreationService.checkGameExists(this.game).subscribe((data) => {
      if ((data as any).success) {
        
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
       this.api.addListener('participantJoined', () => {
         this.participantArray = this.api._participants;
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
    this.router.navigate(['/']);
    this.gameCreationService.endGame(this.game).subscribe( () => {});
  }

  beginGame(){

  }

}
