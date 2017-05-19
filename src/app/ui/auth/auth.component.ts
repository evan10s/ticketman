import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable(
  // selector: 'app-auth',
  // template: `
  //     <button class="btn" *ngIf="user.uid == null" (click)="login()">Sign in with Google</button>
  //     <button class="btn" *ngIf="user.uid != null" (click)="logOut()">Sign out</button>
  //     <div> {{ (user | async)?.uid }} </div>
  // `,
  // styles: [],
  // providers: [AngularFireAuth]
)
export class AuthComponent implements OnInit {
  user: Observable<firebase.User>;
  public redirectUrl: String;
  constructor(public afAuth: AngularFireAuth,
    private router: Router) {
    this.user = afAuth.authState;
 }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => {
      console.log(this.redirectUrl);
      this.router.navigate([this.redirectUrl])
    });
  }
  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }
  setRedirectUrl(url: String) {
      this.redirectUrl = url;
  }


}
