import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GameCreationService {
  hostName: any;
  constructor(private http: HttpClient) { }

  getNewGameInfo(game: any) {
    this.hostName = game.hostName;
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

  createaGame(){
  // generate code
  // create db entry
  // pass info from db entry back to comp so jitsi room creation 
  }

  createGame(game: any){
    console.log(game);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('games/newGame', game, {headers: headers})
      .pipe(map((res) => res));  
  }
  
  // Create DB Entry of Code with room name as code+Jordan'sRoom

  // Collect DisplayName
  // Set 

  // Future: Send Invite

  // Future: Set Calendar
}
