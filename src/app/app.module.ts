import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { ClarityModule } from 'clarity-angular';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    UiModule
  ],
  providers: [ EventComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
