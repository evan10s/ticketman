import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventComponent, pathMatch: "full" },
  { path: 'events/:id',
    component: EventDetailsComponent }
]

// some of the code in this file written using or inspired by http://stackoverflow.com/a/38596261
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
