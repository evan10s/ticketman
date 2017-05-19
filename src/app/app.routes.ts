import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AuthComponent } from './ui/auth/auth.component';
import { AuthGuard } from './auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
const routes: Routes = [

  { path: 'manage',
    children: [
      { path: '', component: EventComponent, pathMatch: "full" },
      { path: 'events/:id',
      component: EventDetailsComponent } ],
    canActivate: [ AuthGuard ]
  },
  { path: 'auth',
    component: EventComponent },
 {
   path: '',
   pathMatch: 'full',
   redirectTo: 'manage'
 }
]

// some of the code in this file written using or inspired by http://stackoverflow.com/a/38596261
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AngularFireAuth, AuthComponent,AuthGuard ]
})
export class AppRoutingModule { }
