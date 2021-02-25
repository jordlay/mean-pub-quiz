import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
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

  ngOnInit(): void {
  const game = {
    hostName: this.hostname,
    roomPin: this.roomPin,
  }
  // dif to just join once created?
  this.gameCreationService.createGame(game).subscribe(data => {
    if ((data as any).success) {
      // this.success = true;
      this.router.navigate(['/playgame']);
    } else {
      this.router.navigate(['/register']);
      // this.success = false;
    }
  });
  }
  

  @ViewChild('meet') meet: ElementRef | any;
  public nickName = 'J';
  api: any;
  gameStarted = false;
  joinedRoom = false;
  createdRoom = false;
  roomPin: any;
  options: any;
  domain = 'meet.jit.si';
  hostname: any;

  startRoom(){
    this.createdRoom = true;
    this.gameStarted = true;
    
    this.options = { 
      roomName: 'JordansRoom',  
      width: '80%', 
      height: '80%', 
      parentNode: this.meet.nativeElement};
    
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    console.log(this.api);
    this.api.executeCommand('displayName', this.nickName);

  }
  joinRoom(){
    this.gameStarted = true;
    this.joinedRoom = true;
    console.log(this.roomPin, this.gameStarted, this.joinedRoom);
    // this.options.roomName = this.roomPin;
    
    this.options = { 
      roomName: this.roomPin,  
      width: 500, 
      height: 500, 
      parentNode: this.meet.nativeElement,
      };
      console.log(this.options);
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
