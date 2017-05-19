import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,
   ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthComponent } from './ui/auth/auth.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: String = state.url;
    console.log("Can activate can consider cases condusive to consideration");
    this.auth.user.subscribe(u => {
      if (u) {
        console.log("Authenticated");
        return true;
      }
      console.log("So, you want to get to",state.url);
      console.log("Thou shalt not pass, go authenticate!");
      this.auth.setRedirectUrl(state.url);
      console.log(this.auth.redirectUrl);
      this.router.navigate(['/auth']);
      return false;
    });
    return true;

  }


  constructor(
    private auth: AuthComponent,
    private router: Router) {

  }
  ngOnInit() {


  }

}
