import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AuthComponent } from './ui/auth/auth.component';
import { AuthGuard } from './ui/auth/auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './ui/auth/auth.service';
const routes: Routes = [

  { path: 'a',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'events'},
      { path: 'events', component: EventComponent, pathMatch: "full" },
      { path: 'events/:id',
      component: EventDetailsComponent } ],
    canActivate: [ AuthGuard ]
  },
  { path: 'auth',
    component: AuthComponent },
 {
   path: '',
   pathMatch: 'full',
   redirectTo: 'a'
 }
]

// some of the code in this file written using or inspired by http://stackoverflow.com/a/38596261
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AngularFireAuth, AuthService,AuthGuard ]
})
export class AppRoutingModule { }
