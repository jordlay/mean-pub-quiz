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
  public nickName = 'J';
  api: any;
  gameStarted = false;
  joinedRoom = false;
  createdRoom = false;
  roomPin: any;
  options: any;
  domain = 'meet.jit.si';
  hostname: any;

  @ViewChild('meet') meet: ElementRef | any;
  ngOnInit(): void {

    this.game = {
      hostName: String,
      roomPin: String,
    }
   
    // this.joinRoom(this.game);

  }
  ngAfterViewInit() {
    setTimeout(()=>{}, 3000);
    this.game = this.gameCreationService.getMeetingParams();
    console.log(this.game);

    this.options = { 
      roomName: this.game.roomPin,  
      configOverwrite: { startWithAudioMuted: true },
      width: 500, 
      height: 500, 
      parentNode: this.meet.nativeElement,
      };
      console.log(this.options);
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

  }



  // startRoom(){
  //   this.createdRoom = true;
  //   this.gameStarted = true;
    
  //   this.options = { 
  //     roomName: 'JordansRoom',  
  //     width: '80%', 
  //     height: '80%', 
  //     parentNode: this.meet.nativeElement};
    
  //   this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  //   console.log(this.api);
  //   this.api.executeCommand('displayName', this.nickName);

  // }
  joinRoom(game: { roomPin: any; }){
    this.gameStarted = true;
    this.joinedRoom = true;
    console.log(this.roomPin, this.gameStarted, this.joinedRoom);
    // this.options.roomName = this.roomPin;
    
    this.options = { 
      roomName: game.roomPin,  
      configOverwrite: { startWithAudioMuted: true },
      width: 500, 
      height: 500, 
      parentNode: this.meet.nativeElement,
      };
      console.log(this.options);
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
