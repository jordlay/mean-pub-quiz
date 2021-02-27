import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameCreationService {
  hostName: any;
  roomPin: any;
  game: any;
  newGameBoolean = true;
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

  getMeetingParams(){
    let game = {
      roomPin: '',
      hostName: ''
    };

    if (this.roomPin) {
      game.roomPin = this.roomPin;
      let headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json');
      return this.http.post('games/joinGame',game, {headers: headers}).pipe(map((res) => res)); 
    } else {
      let headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json');
      return this.http.post('games/joinGame',game, {headers: headers}).pipe(map((res) => res)); 
    }
     
  } 

  getRoomPin(roomPin: string) {
    this.roomPin = roomPin
    return this.roomPin;
  }

  generateCode() {
    return Math.random().toString(20).substr(2, 5).toUpperCase();
  }

  // Future: Send Invite

  // Future: Set Calendar
}
