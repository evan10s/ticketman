import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { ClarityModule } from 'clarity-angular';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component'; //MANY THANKS to https://github.com/angular/angular/issues/15087 for helping me find where BrowserAnimationsModule is
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    AboutComponent,
    AuthComponent ],
    providers: [ AuthService ]
})
export class UiModule { }
