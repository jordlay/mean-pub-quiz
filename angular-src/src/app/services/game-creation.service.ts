import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import * as CryptoJS from 'crypto-js';
// import { crypto } from '../../../node_modules/crypto-browserify'
// import { JwtHelperService } from '@auth0/angular-jwt';
// const crypto = require('crypto');
// const cryptoRandomString = require('crypto-random-string');

@Injectable({
  providedIn: 'root'
})
export class GameCreationService {
  hostName: any;
  roomPin: any;
  game: any;
  constructor(private http: HttpClient) { }

  createGame(game: any) {
    this.generateCode();
    this.hostName = game.hostName;
    game.roomPin = this.roomPin;
    this.game = game;
    // this.roomPin = game.roomPin;
    console.log(this.hostName, game);
    // this.createGame(game);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/newGame', game, {headers: headers})
      .pipe(map((res) => res));  
    // get host name
    // generate random code
    // create DB entry 
    // redirect to /playgame/{{code}}+JordansQuiz
  }

  getMeetingParams(){
    // if just created game
    // if (this.hostName) {
      // return this.game;
    // } else {
      console.log(this.game);
      return this.game;
      // let headers = new HttpHeaders().append('Content-Type', 'application/json');
      // return this.http.get('games/meetingParams', {headers: headers})
    // }
  } 

  generateCode() {
    // console.log(Math.random().toString(20).substr(2, 5));
    this.roomPin = Math.random().toString(20).substr(2, 5).toUpperCase();
    // this.roomPin = crypto.randomBytes(6).toString('hex');
    // this.roomPin = cryptoRandomString({length: 10, type: 'url-safe'});
    console.log('service', this.roomPin);
  }
  // generate code
  // create db entry
  // pass info from db entry back to comp so jitsi room creation 
  

  // createGame(game: any){
  //   console.log(game);
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('games/newGame', game, {headers: headers})
  //     .pipe(map((res) => res));  
  // }
  
  // Create DB Entry of Code with room name as code+Jordan'sRoom

  // Collect DisplayName
  // Set 

  // Future: Send Invite

  // Future: Set Calendar
}
