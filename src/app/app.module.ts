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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from "../environments/environment";
import { AddEventComponent } from './add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailsComponent,
    NavComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    UiModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  providers: [ EventComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
