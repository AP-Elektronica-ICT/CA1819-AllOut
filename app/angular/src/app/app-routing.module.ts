import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { NewgameComponent } from './newgame/newgame.component';
import { NewquestionlistComponent } from './newquestionlist/newquestionlist.component';

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
    path: 'newgame', 
    component: NewgameComponent,
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
    path: 'deletegame/:id', 
    component: NewgameComponent,
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
