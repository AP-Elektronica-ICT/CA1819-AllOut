import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { NewgameComponent } from './newgame/newgame.component';
import { NewquestionlistComponent } from './newquestionlist/newquestionlist.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { NewLocationComponent } from './new-location/new-location.component';
import { AreaComponent } from './area/area.component';
import { LocationComponent } from './location/location.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'newquestionlist', 
    component: NewquestionlistComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'addquestion/:id', 
    component: NewquestionlistComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'newgame', 
    component: NewgameComponent,
    canActivate: [
      AuthGuard
    ]
   },
   {
    path: 'area/:id', 
    component: AreaComponent,
    canActivate: [
      AuthGuard
    ]
   },
   {
    path: 'location/:id', 
    component: LocationComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'editgame/:id', 
    component: NewgameComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'question/:id', 
    component: QuestionComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'newgame', 
    component: NewgameComponent,
    canActivate: [
      AuthGuard
    ]
   },
   { 
    path: 'newlocation', 
    component: NewLocationComponent,
    canActivate: [
      AuthGuard
    ]
   },
   {
    path: 'callback', 
      component: CallbackComponent,
   },
   { 
    path: '**', 
    component: LoginComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
