import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
@Component({
  selector: 'app-auth',
  template: `
      <button class="btn" *ngIf="true" (click)="login()">Sign in with Google</button>
      <button class="btn" *ngIf="true" (click)="logout()">Sign out</button>
      <div> {{ (user | async)?.uid }} </div>
  `,
  styles: [],
  providers: [AuthService, AuthGuard]
}
)
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private authguard: AuthGuard
  ) {

 }

  ngOnInit() {
  }
  login() {
    // const redirect = this.auth.redirectUrl;
    // console.log("redirect is",redirect);
    // this.auth.login().then(() => this.router.navigate([redirect]));
    this.authguard.auth.login();
  }
  logout() {
    this.authguard.auth.logout();
  }




}
