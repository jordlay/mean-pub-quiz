import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
// import '../vendor/jitsi/external_api.js';
import '../../../vendor/jitsi/external_api.js';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    //
  }
  @ViewChild('meet') meet: ElementRef | any;
  public nickName = 'J';
  private api: any;
  gameStarted = false;


  
  startRoom(){
    this.gameStarted = true;
    const options = { roomName: 'JordansRoom',  width: 700, height: 700, parentNode: this.meet.nativeElement};
    const domain = 'meet.jit.si';
    this.api = new JitsiMeetExternalAPI(domain, options);
    console.log(this.api); //it's work.
    this.api.executeCommand('displayName', this.nickName);
    // this.options = {
    //   roomName: "JordansMeeting1",
    //   width: 700,
    //   height: 700,
    //   parentNode: document.querySelector('#meet')
    // }

    // this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
