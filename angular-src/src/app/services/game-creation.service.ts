import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCreationService {
  hostName: any;
  hostBool: any;
  roomPin: any;
  displayName: any;
  game: any;
  newGameBoolean = true;
  participantArray: any;
  constructor(private http: HttpClient) { }

  createGame(game: any) {
    game.roomPin = this.generateCode();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/newGame', game, {headers: headers})
      .pipe(map((res) => res));  

  }

  checkGameExists(game: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/checkGame', game, {headers: headers})
      .pipe(map((res) => res));  
  }

  endGame(game:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/endGame', game, {headers: headers})
      .pipe(map((res) => res));  
  }

  getMeetingParams(roomPin: any){
    let game = {
      roomPin: roomPin,
      hostName: '',
      displayName: ''
    };
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/joinGame',game, {headers: headers}).pipe(map((res) => res)); 

  } 

  setDisplayName(displayName: string){
    this.displayName = displayName;
    return this.displayName;
  }

  getDisplayName(){
    return this.displayName;
  }

  setHostBoolean(hostBool: boolean){
    this.hostBool = hostBool
    return this.hostBool
  }

  getHostBoolean(){
    return this.hostBool
  }

  generateCode() {
    return Math.random().toString(20).substr(2, 5).toUpperCase();
  }

  // setParticipants(participantArray: any){
  //   this.participantArray = participantArray;
  // }

  // getParticipants(){
  //   // return this.participantArray;
  //   return new Observable((observer) => {
  //       observer.next(this.participantArray);
  //   });
  // }

  // Future: Send Invite

  // Future: Set Calendar
}
