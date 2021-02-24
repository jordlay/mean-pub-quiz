import { Component, ElementRef, ViewChild } from '@angular/core';
import '../vendor/jitsi/external_api.js';
declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-src';
  // domain:string = "meet.jit.si";
  options: any;
  // api:any;
  // domain: string = 'meet.jit.si';

  @ViewChild('meet') meet: ElementRef | any;
  public nickName = 'J';
  private api: any;

  ngAfterViewInit(): void {
  const options = { roomName: 'JordansRoom',  width: 700, height: 700, parentNode: this.meet.nativeElement, };
  const domain = 'https://mean-pub-quiz.herokuapp.com/';
  const api = new JitsiMeetExternalAPI(domain, options);
  }
  public executeAnyCommand() {
  console.log(this.api); //it's work.
  this.api.executeCommand('displayName', this.nickName); //it's not work.
  }
  startRoom() {
 
    // this.options = {
    //   roomName: "JordansMeeting1",
    //   width: 700,
    //   height: 700,
    //   parentNode: document.querySelector('#meet')
    // }

    // this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }
}
