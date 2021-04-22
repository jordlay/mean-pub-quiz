import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { GamePlayComponent } from './components/game-waiting-room/game-waiting-room.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatIconModule} from '@angular/material/icon';
import { SocketioService } from './services/socketio.service';
import { GameDetailsComponent } from './components/game-play/game-play.component';
import { GameChatComponent } from './components/game-chat/game-chat.component';
import { ChatSocketIOService } from './services/chat-socket-io.service';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
{path: 'howtoplay', component: HowToPlayComponent},
{path: 'playgame/:pin', component: GamePlayComponent},
{path: '**', redirectTo: '/'},
]; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    GamePlayComponent,
    GameDetailsComponent,
    GameChatComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ClipboardModule,
    MatIconModule
  ],
  exports: [RouterModule, CommonModule, BrowserModule],
  providers: [AuthService, AuthGuard, SocketioService,ChatSocketIOService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
