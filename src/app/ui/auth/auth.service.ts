import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthService implements OnInit {
  user: Observable<firebase.User>;
  public redirectUrl: string;

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute) {
    this.user = afAuth.authState;
 }

  ngOnInit() {
  }

  isLoggedIn(): Observable<boolean> {
    return this.user.map(auth => { console.log(auth); return (auth != null); }).first(); //Got this working using this StackOverflow answer and comment http://stackoverflow.com/questions/39935721/how-to-return-observable-from-subscribe#comment67153515_39935735
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => {
      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || "";
      console.log(redirectUrl);
      this.router.navigate([redirectUrl]);
    });
  }
  public logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }
  setRedirectUrl(url: string) {
      this.redirectUrl = url;
  }


}
