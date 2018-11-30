import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './services/auth.service';
import { GameService } from './services/game.service';
import { AuthGuard } from './auth.guard';
import { NewgameComponent } from './newgame/newgame.component';
import { HttpClientModule } from '@angular/common/http';
import { AreaService } from './services/area.service';
import { FormsModule } from '@angular/forms';
import { NewquestionlistComponent } from './newquestionlist/newquestionlist.component';
import { AreaComponent } from './area/area.component';
import { LocationComponent } from './location/location.component';
import { LocationService } from './services/location.service';
import { QuestionComponent } from './question/question.component';
import { AgmCoreModule } from '@agm/core';
import { NewLocationComponent } from './newlocation/newlocation.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { EditQuestionListComponent } from './edit-question-list/edit-question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CallbackComponent,
    NewgameComponent,
    NewquestionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4HgIDhaV6sv3ddo_Xol9r4fDLj7RpOaU'
    })
  ],
  providers: [AuthService, AuthGuard, GameService, AreaService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
